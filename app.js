const { useState, useEffect, useCallback } = React;

// Main App Component
function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [darkMode, setDarkMode] = useState(false);
    const [examResults, setExamResults] = useState([]);
    const [currentExam, setCurrentExam] = useState(null);

    // Load saved data from localStorage on mount
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('pnleDarkMode') === 'true';
        const savedResults = localStorage.getItem('pnleResults');
        
        setDarkMode(savedDarkMode);
        if (savedResults) {
            setExamResults(JSON.parse(savedResults));
        }
    }, []);

    // Save dark mode preference
    useEffect(() => {
        localStorage.setItem('pnleDarkMode', darkMode);
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    // Save exam results
    const saveExamResult = useCallback((result) => {
        const newResults = [...examResults, result];
        setExamResults(newResults);
        localStorage.setItem('pnleResults', JSON.stringify(newResults));
    }, [examResults]);

    const renderPage = () => {
        switch(currentPage) {
            case 'dashboard':
                return <Dashboard setCurrentPage={setCurrentPage} examResults={examResults} />;
            case 'practice':
                return <PracticeMode setCurrentPage={setCurrentPage} saveExamResult={saveExamResult} />;
            case 'mock':
                return <MockExamMode setCurrentPage={setCurrentPage} saveExamResult={saveExamResult} />;
            case 'results':
                return <ResultsPage setCurrentPage={setCurrentPage} examResults={examResults} />;
            case 'review':
                return <ReviewPage setCurrentPage={setCurrentPage} examResults={examResults} />;
            default:
                return <Dashboard setCurrentPage={setCurrentPage} examResults={examResults} />;
        }
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <Header 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <main className="container mx-auto px-4 py-6 max-w-4xl">
                {renderPage()}
            </main>
        </div>
    );
}

// Header Component
function Header({ currentPage, setCurrentPage, darkMode, setDarkMode }) {
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <i className="fas fa-heartbeat text-3xl text-pink-300 animate-pulse"></i>
                        <i className="fas fa-heart text-xl text-red-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i>
                    </div>
                    <h1 className="text-xl font-bold">PNLE Reviewer ni Angel</h1>
                </div>
                <button 
                    onClick={toggleDarkMode}
                    className="p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    aria-label="Toggle dark mode"
                >
                    <i className={`fas ${darkMode ? 'fa-sun text-yellow-300' : 'fa-moon text-blue-200'} text-xl`}></i>
                </button>
            </div>
            <nav className="mt-4">
                <ul className="flex flex-wrap justify-center gap-3">
                    {[
                        { id: 'dashboard', icon: 'fa-home', color: 'text-green-300', label: 'Dashboard' },
                        { id: 'practice', icon: 'fa-book-open', color: 'text-blue-300', label: 'Practice' },
                        { id: 'mock', icon: 'fa-graduation-cap', color: 'text-purple-300', label: 'Mock Exam' },
                        { id: 'results', icon: 'fa-chart-line', color: 'text-orange-300', label: 'Results' },
                        { id: 'review', icon: 'fa-sync-alt', color: 'text-pink-300', label: 'Review' }
                    ].map(({ id, icon, color, label }) => (
                        <li key={id}>
                            <button
                                onClick={() => setCurrentPage(id)}
                                className={`w-12 h-12 rounded-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative group ${
                                    currentPage === id
                                        ? 'bg-white text-blue-600 shadow-lg'
                                        : 'hover:bg-blue-700 text-white'
                                }`}
                                title={label}
                            >
                                <i className={`fas ${icon} text-lg ${currentPage === id ? '' : color}`}></i>
                                {/* Tooltip for desktop */}
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                    {label}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

// Dashboard Component
function Dashboard({ setCurrentPage, examResults }) {
    const getStats = () => {
        if (examResults.length === 0) {
            return {
                totalExams: 0,
                averageScore: 0,
                passedExams: 0,
                bestScore: 0
            };
        }

        const totalExams = examResults.length;
        const averageScore = Math.round(
            examResults.reduce((sum, result) => sum + result.percentage, 0) / totalExams
        );
        const passedExams = examResults.filter(result => result.percentage >= 75).length;
        const bestScore = Math.max(...examResults.map(result => result.percentage));

        return { totalExams, averageScore, passedExams, bestScore };
    };

    const stats = getStats();

    return (
        <div className="fade-in">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome to PNLE Reviewer
                </h2>
                <p className="text-gray-600">
                    Prepare for your Philippine Nurse Licensure Examination
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="card text-center">
                    <i className="fas fa-clipboard-list text-3xl text-blue-500 mb-2"></i>
                    <div className="text-2xl font-bold">{stats.totalExams}</div>
                    <div className="text-sm text-gray-600">Total Exams</div>
                </div>
                <div className="card text-center">
                    <i className="fas fa-percentage text-3xl text-green-500 mb-2"></i>
                    <div className="text-2xl font-bold">{stats.averageScore}%</div>
                    <div className="text-sm text-gray-600">Average Score</div>
                </div>
                <div className="card text-center">
                    <i className="fas fa-trophy text-3xl text-yellow-500 mb-2"></i>
                    <div className="text-2xl font-bold">{stats.passedExams}</div>
                    <div className="text-sm text-gray-600">Passed Exams</div>
                </div>
                <div className="card text-center">
                    <i className="fas fa-star text-3xl text-purple-500 mb-2"></i>
                    <div className="text-2xl font-bold">{stats.bestScore}%</div>
                    <div className="text-sm text-gray-600">Best Score</div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="card">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <i className="fas fa-book-open mr-2 text-blue-500"></i>
                        Practice Mode
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Practice questions by category with immediate feedback
                    </p>
                    <button 
                        onClick={() => setCurrentPage('practice')}
                        className="start-mock-exam-btn"
                        style={{backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', minHeight: '48px', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer'}}
                    >
                        Start Practice
                    </button>
                </div>

                <div className="card">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <i className="fas fa-clock mr-2 text-orange-500"></i>
                        Mock Exam Mode
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Timed exam simulation with 50 questions
                    </p>
                    <button 
                        onClick={() => setCurrentPage('mock')}
                        className="start-mock-exam-btn"
                        style={{backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', minHeight: '48px', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer'}}
                    >
                        Start Mock Exam
                    </button>
                </div>
            </div>

            {examResults.length > 0 && (
                <div className="card mt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <i className="fas fa-history mr-2 text-gray-500"></i>
                        Recent Results
                    </h3>
                    <div className="space-y-2">
                        {examResults.slice(-3).reverse().map((result, index) => (
                            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <span className="font-medium">{result.mode}</span>
                                    <span className="text-sm text-gray-600 ml-2">
                                        {new Date(result.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className={`font-bold ${
                                        result.percentage >= 75 ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {result.percentage}%
                                    </span>
                                    <div className="text-sm text-gray-600">
                                        {result.correct}/{result.total} correct
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// Practice Mode Component
function PracticeMode({ setCurrentPage, saveExamResult }) {
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [quizStarted, setQuizStarted] = useState(false);

    const startQuiz = () => {
        let filteredQuestions = selectedCategory === 'All Categories' 
            ? [...pnleQuestions]
            : pnleQuestions.filter(q => q.category === selectedCategory);
        
        // Check if we have enough questions for the selected category
        const availableQuestions = filteredQuestions.length;
        const targetQuestions = Math.min(50, availableQuestions);
        
        if (availableQuestions < 50) {
            console.log(`Only ${availableQuestions} questions available for ${selectedCategory}. Using all available questions.`);
        }
        
        // Randomize questions and take available questions (up to 50)
        filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
        setQuestions(filteredQuestions.slice(0, targetQuestions));
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuizStarted(true);
    };

    const handleAnswerSelect = (answerIndex) => {
        if (showResult) return;
        setSelectedAnswer(answerIndex);
    };

    const submitAnswer = () => {
        if (selectedAnswer === null) return;
        
        const newAnswers = [...answers, {
            questionId: questions[currentQuestionIndex].id,
            selected: selectedAnswer,
            correct: questions[currentQuestionIndex].correct
        }];
        
        setAnswers(newAnswers);
        setShowResult(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            // Show results
            const correct = newAnswers.filter(a => a.selected === a.correct).length;
            const percentage = Math.round((correct / questions.length) * 100);
            
            const result = {
                date: new Date().toISOString(),
                mode: 'Practice',
                category: selectedCategory,
                total: questions.length,
                correct: correct,
                percentage: percentage,
                answers: newAnswers
            };
            
            saveExamResult(result);
            setCurrentPage('results');
        }
    };

    if (!quizStarted) {
        return (
            <div className="fade-in">
                <h2 className="text-2xl font-bold mb-6">Practice Mode</h2>
                
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Select Category</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`p-3 rounded-lg border-2 transition-colors ${
                                    selectedCategory === category
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    
                    <button 
                        onClick={startQuiz}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        Start Practice
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="fade-in">
            <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="card">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-700 dark:text-blue-200">
                        {currentQuestion.category}
                    </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">
                    {currentQuestion.question}
                </h3>
                
                <div className="space-y-3 mb-6">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showResult}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                showResult
                                    ? index === currentQuestion.correct
                                        ? 'correct-answer border-green-500'
                                        : index === selectedAnswer
                                        ? 'incorrect-answer border-red-500'
                                        : 'border-gray-200 opacity-50'
                                    : selectedAnswer === index
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                        </button>
                    ))}
                </div>

                {showResult && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                        <p className="font-medium text-blue-800 mb-2">Explanation:</p>
                        <p className="text-blue-700">{currentQuestion.explanation}</p>
                    </div>
                )}

                <div className="flex gap-3">
                    {!showResult ? (
                        <button
                            onClick={submitAnswer}
                            disabled={selectedAnswer === null}
                            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={nextQuestion}
                            className="btn-primary flex-1"
                        >
                            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// Mock Exam Mode Component
function MockExamMode({ setCurrentPage, saveExamResult }) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
    const [examStarted, setExamStarted] = useState(false);
    const [examFinished, setExamFinished] = useState(false);

    // Timer effect
    useEffect(() => {
        if (examStarted && !examFinished && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !examFinished) {
            finishExam();
        }
    }, [timeLeft, examStarted, examFinished]);

    const startExam = () => {
        const shuffledQuestions = [...pnleQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 50); // 50 questions for mock exam
        
        setQuestions(shuffledQuestions);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setTimeLeft(1800);
        setExamStarted(true);
        setExamFinished(false);
    };

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex);
        
        // Update answers array
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = {
            questionId: questions[currentQuestionIndex].id,
            selected: answerIndex,
            correct: questions[currentQuestionIndex].correct
        };
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(answers[currentQuestionIndex + 1]?.selected || null);
        } else {
            finishExam();
        }
    };

    const previousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setSelectedAnswer(answers[currentQuestionIndex - 1]?.selected || null);
        }
    };

    const finishExam = () => {
        setExamFinished(true);
        
        const validAnswers = answers.filter(a => a !== undefined);
        const correct = validAnswers.filter(a => a.selected === a.correct).length;
        const percentage = Math.round((correct / questions.length) * 100);
        
        const result = {
            date: new Date().toISOString(),
            mode: 'Mock Exam',
            category: 'All Categories',
            total: questions.length,
            correct: correct,
            percentage: percentage,
            answers: validAnswers,
            timeSpent: 1800 - timeLeft
        };
        
        saveExamResult(result);
        setCurrentPage('results');
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (!examStarted) {
        return (
            <div className="fade-in">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Mock Exam Mode</h2>
                
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Exam Information</h3>
                    
                    <div className="space-y-4 mb-6">
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <p>50 random questions from all categories</p>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <p>30 minutes time limit</p>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <p>75% passing score required</p>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <p>Navigate between questions freely</p>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                            <p>Results saved automatically</p>
                        </div>
                     
                    </div>
                    
                    <button 
                        onClick={startExam}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg border-2 border-blue-800 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        style={{minHeight: '48px', fontWeight: 'bold', color: '#ffffff'}}
                    >
                        Start Mock Exam
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="fade-in">
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-600">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </div>
                    <div className={`timer ${timeLeft < 300 ? 'text-red-500 pulse' : ''}`}>
                        <i className="fas fa-clock mr-1"></i>
                        {formatTime(timeLeft)}
                    </div>
                </div>
                <div className="progress-bar">
                    <div 
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="card">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-700 dark:text-blue-200">
                        {currentQuestion.category}
                    </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-4">
                    {currentQuestion.question}
                </h3>
                
                <div className="space-y-3 mb-6">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                selectedAnswer === index
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                        </button>
                    ))}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={previousQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="btn-secondary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <i className="fas fa-arrow-left mr-1"></i>
                        Previous
                    </button>
                    
                    {currentQuestionIndex < questions.length - 1 ? (
                        <button
                            onClick={nextQuestion}
                            className="btn-primary flex-1"
                        >
                            Next
                            <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    ) : (
                        <button
                            onClick={finishExam}
                            className="btn-danger flex-1"
                        >
                            Finish Exam
                            <i className="fas fa-flag-checkered ml-1"></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

// Results Page Component
function ResultsPage({ setCurrentPage, examResults }) {
    const getLatestResult = () => {
        return examResults[examResults.length - 1];
    };

    const getPerformanceByCategory = () => {
        const categoryStats = {};
        
        examResults.forEach(result => {
            if (result.answers) {
                result.answers.forEach(answer => {
                    const question = pnleQuestions.find(q => q.id === answer.questionId);
                    if (question) {
                        if (!categoryStats[question.category]) {
                            categoryStats[question.category] = { correct: 0, total: 0 };
                        }
                        categoryStats[question.category].total++;
                        if (answer.selected === answer.correct) {
                            categoryStats[question.category].correct++;
                        }
                    }
                });
            }
        });
        
        return Object.entries(categoryStats).map(([category, stats]) => ({
            category,
            percentage: Math.round((stats.correct / stats.total) * 100),
            correct: stats.correct,
            total: stats.total
        }));
    };

    const latestResult = getLatestResult();
    const categoryPerformance = getPerformanceByCategory();

    if (!latestResult) {
        return (
            <div className="fade-in text-center">
                <i className="fas fa-chart-bar text-6xl text-gray-400 mb-4"></i>
                <h2 className="text-2xl font-bold mb-4">No Results Yet</h2>
                <p className="text-gray-600 mb-6">Complete a practice or mock exam to see your results here.</p>
                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
                    <p className="text-gray-700 dark:text-gray-300">
                        <i className="fas fa-info-circle mr-2"></i>
                        Start by taking a practice exam to build your confidence, or try a mock exam to test your knowledge under timed conditions.
                    </p>
                </div>
                <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="btn-primary"
                >
                    <i className="fas fa-home mr-2"></i>
                    Back to Dashboard
                </button>
            </div>
        );
    }

    const passed = latestResult.percentage >= 75;

    return (
        <div className="fade-in">
            <div className="text-center mb-6">
                <div className={`inline-block p-6 rounded-full mb-4 ${
                    passed ? 'bg-green-100' : 'bg-red-100'
                }`}>
                    <i className={`fas fa-${passed ? 'trophy' : 'times-circle'} text-6xl ${
                        passed ? 'text-green-600' : 'text-red-600'
                    }`}></i>
                </div>
                <h2 className="text-3xl font-bold mb-2">
                    {passed ? 'Congratulations!' : 'Keep Practicing!'}
                </h2>
                <p className={`text-lg ${passed ? 'text-green-600' : 'text-red-600'}`}>
                    {passed ? 'You passed the exam!' : 'You did not meet the passing score'}
                </p>
            </div>

            <div className="card mb-6">
                <h3 className="text-xl font-semibold mb-4">Latest Result</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                            {latestResult.percentage}%
                        </div>
                        <div className="text-sm text-gray-600">Score</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                            {latestResult.correct}
                        </div>
                        <div className="text-sm text-gray-600">Correct</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                            {latestResult.total - latestResult.correct}
                        </div>
                        <div className="text-sm text-gray-600">Incorrect</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                            {latestResult.mode}
                        </div>
                        <div className="text-sm text-gray-600">Mode</div>
                    </div>
                </div>
                
                {latestResult.timeSpent !== undefined && (
                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Time spent: </span>
                        <span className="font-medium">
                            {Math.floor(latestResult.timeSpent / 60)}m {latestResult.timeSpent % 60}s
                        </span>
                    </div>
                )}
            </div>

            {categoryPerformance.length > 0 && (
                <div className="card mb-6">
                    <h3 className="text-xl font-semibold mb-4">Performance by Category</h3>
                    <div className="space-y-3">
                        {categoryPerformance.map((cat, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium">{cat.category}</span>
                                    <span>{cat.percentage}% ({cat.correct}/{cat.total})</span>
                                </div>
                                <div className="progress-bar">
                                    <div 
                                        className={`progress-fill ${
                                            cat.percentage >= 75 ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                        style={{ width: `${cat.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {examResults.length > 1 && (
                <div className="card mb-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Attempts</h3>
                    <div className="space-y-3">
                        {examResults.slice(-5).reverse().map((result, index) => (
                            <div key={index} className={`p-4 rounded-lg border-2 ${
                                result === latestResult 
                                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                                    : 'border-gray-200 dark:border-gray-600'
                            }`}>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="font-medium">
                                            {result.mode} - {result.category || 'Mixed'}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {new Date(result.date).toLocaleDateString()} • {result.total} questions
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-2xl font-bold ${
                                            result.percentage >= 75 ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                            {result.percentage}%
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {result.correct}/{result.total}
                                        </div>
                                    </div>
                                </div>
                                {result.timeSpent !== undefined && (
                                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        <i className="fas fa-clock mr-1"></i>
                                        {Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s
                                    </div>
                                )}
                                {result === latestResult && (
                                    <div className="mt-2">
                                        <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200 px-2 py-1 rounded-full">
                                            Most Recent
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex gap-3">
                <button 
                    onClick={() => setCurrentPage('review')}
                    className="btn-primary flex-1"
                >
                    <i className="fas fa-redo mr-1"></i>
                    Review Mistakes
                </button>
                <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="btn-secondary flex-1"
                >
                    <i className="fas fa-home mr-1"></i>
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

// Review Page Component
function ReviewPage({ setCurrentPage, examResults }) {
    const [selectedResult, setSelectedResult] = useState(null);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    useEffect(() => {
        if (examResults.length > 0) {
            const latest = examResults[examResults.length - 1];
            setSelectedResult(latest);
            
            if (latest.answers) {
                const incorrect = latest.answers
                    .filter(answer => answer.selected !== answer.correct)
                    .map(answer => {
                        const question = pnleQuestions.find(q => q.id === answer.questionId);
                        return { ...answer, question };
                    });
                setIncorrectAnswers(incorrect);
            }
        }
    }, [examResults]);

    if (incorrectAnswers.length === 0) {
        return (
            <div className="fade-in text-center">
                <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
                <h2 className="text-2xl font-bold mb-4">Great Job!</h2>
                <p className="text-gray-600 mb-6">You don't have any incorrect answers to review.</p>
                <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="btn-primary"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="fade-in">
            <h2 className="text-2xl font-bold mb-6">Review Incorrect Answers</h2>
            
            <div className="mb-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800">
                    <i className="fas fa-lightbulb mr-2"></i>
                    Review your mistakes to improve your understanding of these topics.
                </p>
            </div>

            <div className="space-y-6">
                {incorrectAnswers.map((item, index) => (
                    <div key={index} className="card">
                        <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-700 dark:text-blue-200">
                                {item.question.category}
                            </span>
                        </div>
                        
                        <h3 className="font-semibold mb-3">
                            {index + 1}. {item.question.question}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                            {item.question.options.map((option, optIndex) => (
                                <div 
                                    key={optIndex}
                                    className={`p-3 rounded-lg border-2 ${
                                        optIndex === item.question.correct
                                            ? 'correct-answer border-green-500'
                                            : optIndex === item.selected
                                            ? 'incorrect-answer border-red-500'
                                            : 'border-gray-200 opacity-50'
                                    }`}
                                >
                                    <span className="font-medium">{String.fromCharCode(65 + optIndex)}.</span> {option}
                                    {optIndex === item.question.correct && (
                                        <span className="ml-2 text-green-600 font-medium">
                                            <i className="fas fa-check"></i> Correct Answer
                                        </span>
                                    )}
                                    {optIndex === item.selected && optIndex !== item.question.correct && (
                                        <span className="ml-2 text-red-600 font-medium">
                                            <i className="fas fa-times"></i> Your Answer
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <p className="font-medium text-blue-800 mb-2">
                                <i className="fas fa-info-circle mr-1"></i>
                                Explanation:
                            </p>
                            <p className="text-blue-700">{item.question.explanation}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <button 
                    onClick={() => setCurrentPage('dashboard')}
                    className="btn-primary w-full"
                >
                    <i className="fas fa-home mr-1"></i>
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
