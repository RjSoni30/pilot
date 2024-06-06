#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('Build Node App') {
            steps {
                sh """
                echo "This is first step"
                """
            }
            {
                sh """
                echo "This is second step"
                """
            }
        }
    }
}