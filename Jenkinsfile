pipeline { 
    agent { docker { image 'node:16.13.1-alpine' } }

    stages {
        stage('Build') { 
            steps { 
                echo 'hello'
                echo 'hello world'
                sh 'node --version'
            }
        }
    }
}