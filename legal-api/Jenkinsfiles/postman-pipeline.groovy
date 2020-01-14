#!/usr/bin/env groovy
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//JENKINS DEPLOY ENVIRONMENT VARIABLES:
// - JENKINS_JAVA_OVERRIDES  -Dhudson.model.DirectoryBrowserSupport.CSP= -Duser.timezone=America/Vancouver
//   -> user.timezone : set the local timezone so logfiles report correxct time
//   -> hudson.model.DirectoryBrowserSupport.CSP : removes restrictions on CSS file load, thus html pages of test reports are displayed pretty
//   See: https://docs.openshift.com/container-platform/3.9/using_images/other_images/jenkins.html for a complete list of JENKINS env vars

// define constants
// set from call

def COMPONENT_NAME = 'legal-api'
def TAG_NAME = 'dev'

// define groovy functions
import groovy.json.JsonOutput

node {
    stage("Run postman pipeline for ${COMPONENT_NAME}-${TAG_NAME}") {
        script {
            echo """
            Pipeline 'postman-pipeline' in gl2uos-tools called with constants:
                - COMPONENT_NAME: ${COMPONENT_NAME}
                - TAG_NAME: ${TAG_NAME}
            """
            openshift.withCluster() {
                openshift.withProject('gl2uos-tools') {
                    // start + wait for ora-pipline to finish
                    def pipeline = openshift.selector('bc', 'postman-pipeline')
                    pipeline.startBuild('--wait=true', "-e=COMPONENT_NAME=${COMPONENT_NAME}", "-e=TAG_NAME=${TAG_NAME}").logs('-f')

                }
            }
        }
    }
}
