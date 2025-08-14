pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'nodejs', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        DEPLOY_PATH = 'C:\\deploy\\reactapp'  // Change to your preferred folder
    }

    stages {
        stage('Checkout') {
            steps {
                echo "Cloning React app from GitHub..."
                git branch: 'main', url: 'https://github.com/username/my-react-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm packages..."
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo "Building React app..."
                bat 'npm start'
            }
        }

        stage('Deploy Locally') {
            steps {
                echo "Deploying build folder..."
                bat """
                    if not exist "${DEPLOY_PATH}" mkdir "${DEPLOY_PATH}"
                    xcopy build\\* "${DEPLOY_PATH}\\" /E /Y
                """
            }
        }

        stage('Serve App') {
            steps {
                echo "Starting local server..."
                bat 'npx serve -s build -l 5000'
            }
        }
    }

    post {
        success {
            echo "✅ React app deployed successfully! Visit http://localhost:5000"
        }
        failure {
            echo "❌ Build failed. Check logs."
        }
    }
}
