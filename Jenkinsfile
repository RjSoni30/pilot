#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('Build Node App') {
            steps {
                sh """
                npm install
                node ./src/server.js
                """
            }
        }
    }
}