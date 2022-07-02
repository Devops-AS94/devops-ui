module.exports = {
    "plugins": [
        [
            "@semantic-release/commit-analyzer"
        ],
        [
            "@semantic-release/exec",
            {
                "prepareCmd": "scripts/prepare.sh ${process.env.DOCKER_USERNAME}/${process.env.DOCKER_REPOSITORY_NAME}",
                "successCmd": "scripts/success.sh ${process.env.DOCKER_USERNAME}/${process.env.DOCKER_REPOSITORY_NAME}:${nextRelease.version}"
            }
        ],
        [
            "@semantic-release-plus/docker",
            {
                "name": `${process.env.DOCKER_USERNAME}/${process.env.DOCKER_REPOSITORY_NAME}`
            }
        ],
        [
            "@semantic-release/release-notes-generator"
        ],
        [
            "@semantic-release/github"
        ]
    ]
}