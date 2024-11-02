export const GRID_SIZE = 20;
export const GAME_DURATION = 180;

export const TOPICS = {
  'data-science': 'Data Science',
  'machine-learning': 'Machine Learning', 
  'data-analysis': 'Data Analysis',
  'data-engineering': 'Data Engineering',
  'artificial-intelligence': 'Artificial Intelligence'
} as const;

export const TOPIC_WORDS = {
  'data-science': [
    'ALGORITHM', 'DATASET', 'HYPOTHESIS', 'INFERENCE', 'METADATA',
    'MINING', 'MODEL', 'PYTHON', 'REGRESSION', 'SAMPLING',
    'STATISTICS', 'VISUALIZATION', 'OUTLIER', 'CORRELATION', 'ANALYTICS'
  ],
  'machine-learning': [
    'CLASSIFICATION', 'CLUSTERING', 'DEEPLEARNING', 'ENSEMBLE', 'GRADIENT',
    'NEURAL', 'OPTIMIZATION', 'OVERFITTING', 'PREDICTION', 'SUPERVISED',
    'TENSOR', 'TRAINING', 'VALIDATION', 'FEATURES', 'BIAS'
  ],
  'data-analysis': [
    'AGGREGATION', 'CLEANING', 'DASHBOARD', 'FILTERING', 'INSIGHTS',
    'PIVOT', 'REPORTING', 'SORTING', 'SPREADSHEET', 'TABLEAU',
    'TRENDS', 'VARIANCE', 'METRICS', 'QUERY', 'JOINS'
  ],
  'data-engineering': [
    'PIPELINE', 'DATABASE', 'ETL', 'HADOOP', 'KAFKA',
    'NOSQL', 'ORCHESTRATION', 'PARALLEL', 'SPARK', 'STREAMING',
    'WAREHOUSE', 'WORKFLOW', 'BATCH', 'SCHEMA', 'API'
  ],
  'artificial-intelligence': [
    'AUTONOMOUS', 'COGNITIVE', 'EXPERT', 'GENETIC', 'HEURISTIC',
    'INTELLIGENCE', 'KNOWLEDGE', 'LEARNING', 'REASONING', 'ROBOTICS',
    'SEMANTIC', 'SYNTHETIC', 'VISION', 'NLP', 'AGENT'
  ]
} as const;

export const WORD_DEFINITIONS: Record<string, string> = {
  // Data Science
  'ALGORITHM': 'A step-by-step procedure for solving a problem or performing a computation',
  'DATASET': 'A collection of related data points treated as a single unit',
  'HYPOTHESIS': 'A proposed explanation that can be tested with data',
  'INFERENCE': 'The process of drawing conclusions from data analysis',
  'METADATA': 'Data that provides information about other data',
  'MINING': 'The process of discovering patterns in large datasets',
  'MODEL': 'A mathematical representation used to make predictions',
  'PYTHON': 'A popular programming language for data science',
  'REGRESSION': 'Statistical method for modeling relationships between variables',
  'SAMPLING': 'The process of selecting a subset from a larger population',
  'STATISTICS': 'The science of collecting, analyzing, and interpreting data',
  'VISUALIZATION': 'The graphical representation of data and information',
  'OUTLIER': 'A data point that differs significantly from other observations',
  'CORRELATION': 'A statistical measure indicating relationship between variables',
  'ANALYTICS': 'The systematic analysis of data to discover insights',

  // Machine Learning
  'CLASSIFICATION': 'The task of categorizing data into predefined classes',
  'CLUSTERING': 'Grouping similar objects together based on their characteristics',
  'DEEPLEARNING': 'Neural networks with many layers for complex pattern recognition',
  'ENSEMBLE': 'Combining multiple learning algorithms for better predictions',
  'GRADIENT': 'The direction and rate of steepest increase in a function',
  'NEURAL': 'Related to artificial neural networks in deep learning',
  'OPTIMIZATION': 'The process of finding the best solution under constraints',
  'OVERFITTING': 'When a model learns training data too well, including noise',
  'PREDICTION': 'The output of a model forecasting future outcomes',
  'SUPERVISED': 'Learning from labeled training data',
  'TENSOR': 'A multi-dimensional array used in deep learning',
  'TRAINING': 'The process of teaching a model using data',
  'VALIDATION': 'Evaluating model performance on unseen data',
  'FEATURES': 'Input variables used for machine learning',
  'BIAS': 'Systematic error in model predictions',

  // Data Analysis
  'AGGREGATION': 'The process of combining multiple pieces of data',
  'CLEANING': 'The process of detecting and correcting inaccurate records',
  'DASHBOARD': 'Visual display of key metrics and data points',
  'FILTERING': 'The process of selecting a subset of data based on conditions',
  'INSIGHTS': 'Meaningful understanding gained through data analysis',
  'PIVOT': 'A table format that summarizes data in a cross-tabular format',
  'REPORTING': 'Presenting data findings in an organized format',
  'SORTING': 'Arranging data in a specific order or sequence',
  'SPREADSHEET': 'A document that stores data in a grid of rows and columns',
  'TABLEAU': 'A data visualization software platform',
  'TRENDS': 'Patterns or tendencies found in data over time',
  'VARIANCE': 'A measure of variability in a dataset',
  'METRICS': 'Quantifiable measures used to track and assess status',
  'QUERY': 'A request for specific information from a database',
  'JOINS': 'Combining data from multiple database tables',

  // Data Engineering
  'PIPELINE': 'A sequence of data processing steps and transformations',
  'DATABASE': 'An organized collection of structured information',
  'ETL': 'Extract, Transform, Load process for data warehousing',
  'HADOOP': 'Framework for distributed storage and processing of big data',
  'KAFKA': 'Distributed streaming platform for building pipelines',
  'NOSQL': 'Database systems that provide flexible schemas for data',
  'ORCHESTRATION': 'Automated configuration, management, and coordination',
  'PARALLEL': 'Simultaneous execution of data processing tasks',
  'SPARK': 'Engine for large-scale data processing and analytics',
  'STREAMING': 'Processing data in real-time as it arrives',
  'WAREHOUSE': 'System for storing and analyzing large amounts of data',
  'WORKFLOW': 'Sequence of steps involved in moving and processing data',
  'BATCH': 'Processing data in groups rather than in real-time',
  'SCHEMA': 'The structure that defines how data is organized',
  'API': 'Interface for different software systems to communicate',

  // Artificial Intelligence
  'AUTONOMOUS': 'Capable of operating independently without human input',
  'COGNITIVE': 'Related to mental processes of perception and learning',
  'EXPERT': 'A system that emulates decision-making of a human expert',
  'GENETIC': 'Algorithms inspired by the process of natural selection',
  'HEURISTIC': 'A practical problem-solving approach based on experience',
  'INTELLIGENCE': 'The ability to acquire and apply knowledge and skills',
  'KNOWLEDGE': 'Structured information derived from data analysis',
  'LEARNING': 'The process where systems improve from experience',
  'REASONING': 'The process of thinking about something in a logical way',
  'ROBOTICS': 'The design and operation of robots using AI',
  'SEMANTIC': 'Related to meaning in data or text analysis',
  'SYNTHETIC': 'Artificially generated data or intelligence',
  'VISION': 'AI systems that can analyze and understand visual information',
  'NLP': 'Natural Language Processing for text analysis',
  'AGENT': 'An autonomous entity that can perceive and act in its environment'
};