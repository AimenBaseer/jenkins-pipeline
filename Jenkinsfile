pipeline { 
    agent { docker { image 'node:16.13.1-alpine' } }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Download File') { 
            steps { 
                sh 'node ./scripts/downloadStage.js'
            }
        }
       stage('Process file') { 
            steps { 
                sh 'node ./scripts/processingStage.js'
            }
        }
       stage('Upload File') { 
            steps { 
                sh 'node ./scripts/uploadStage.js'
            }
        }
    }
}