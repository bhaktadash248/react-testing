import React from "react";

const GuessedWords = () => {
    return (
        <div className="p-3" data-test='guessed-word'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Guessed word</th>
                        <th scope="col">Number of word matches</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>                        <td>1</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GuessedWords;