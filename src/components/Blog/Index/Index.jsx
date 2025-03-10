import './blog';

import {
  Fragment,
  useState,
} from 'react';

import useObject from '../../../Hooks/useObject';
import BdCard from '../../BD/bdCard.js';
import BD_oBj from '../../BD/bds.json';
import ArticleCard from './ArticleCard';

function BlogIndex() {
  const articleElm = [];
  const bd_articles = useState(BD_oBj);
  const [data, dataFn] = '' //useArticle({ url: 'http://127.0.0.1:8000/Api/post' });
  function ftch() {
    let rsp = fetch('http://127.0.0.1:8000/Api/post', {
      method: 'GET',
      mode: "cors",
      headers: { "content-type": "application/json" }
    }).then(rs => { console.log(rs) })
    console.log(rsp)
  }
  ftch()

  const [obj, fn] = useObject({ object: data })
  if (data) {
    for (const element of data) {

      articleElm.push(<ArticleCard key={element.id} article={element} />)
    }
  }
  return <Fragment>


    <div className="w-full md:w-9/12 mx-auto">
      <div className=" w-full mx-auto flex-col mt-5  space-y-4">


        {
          bd_articles ? bd_articles.map((article, key) => <BdCard key={key} BD_obj={article} />) : <p>Loading...</p>
        }

      </div>
    </div>

  </Fragment>
}

export default BlogIndex