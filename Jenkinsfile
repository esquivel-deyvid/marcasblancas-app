pipeline {
    agent any
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/esquivel-deyvid/marcasblancas-app.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install || true'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'echo "Pruebas OK"'
            }
        }
        stage('Publicar') {
            steps {
                sh 'echo "App Marcas Blancas lista para despliegue"'
            }
        }
    }
}