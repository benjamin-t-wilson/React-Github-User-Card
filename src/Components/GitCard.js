import React from 'react'

class GitCard extends React.Component {
    render () {
        return (
            <a href={this.props.subj.html_url} target="blank" className="gitCard">
              <img src={this.props.subj.avatar_url} alt="Profile Avatar" />
              <div className="gitCardRight">
                <h1>{this.props.subj.name}</h1>
                <p>{this.props.subj.company}</p>
                <p>{this.props.subj.bio}</p>
                <ul>
                  <li>Followed by: {this.props.subj.followers}</li>
                  <li>Follows: {this.props.subj.following}</li>
                  <li>Repos: {this.props.subj.public_repos}</li>
                </ul>
              </div>
            </a>
        )
    }
}

export default GitCard
