pipeline { 
    agent { docker { image 'node:16.13.1-alpine' } }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') { 
            steps { 
                sh 'node ./file1.js'
            }
        }
    }
}