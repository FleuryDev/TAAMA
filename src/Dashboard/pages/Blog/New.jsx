import React, {
    Component,
    Fragment,
} from 'react';

import Editor from '../Writters/Editor';

export default class NewArticle extends Component {
    render() {
        return <Fragment>
            <div className=" mt-20 relative space-y-6">
                <Editor />
            </div>
        </Fragment>;
    }
}