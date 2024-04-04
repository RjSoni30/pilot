node {
    stage 'Checkout'

    checkout scm

    stage 'Run shell command'
    withSonarQubeEnv {
        sh "date"
    }
} 
