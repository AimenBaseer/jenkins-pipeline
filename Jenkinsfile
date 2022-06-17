pipeline { 
    agent { docker { image 'node:16.13.1-alpine' } }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Download from S3') { 
            steps { 
                sh 'node ./scripts/stage1.js'
            }
        }
        stage('Run unity scripts') { 
            steps { 
                sh 'node ./scripts/stage2.js'
            }
        }
        stage('Upload to S3') { 
            steps { 
                sh 'node ./scripts/stage3.js'
            }
        }
    }
}