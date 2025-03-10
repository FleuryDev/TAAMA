import { Fragment } from 'react';

import { Link } from 'react-router-dom';

import BDS from '../BD/bds.json';
import PresentationBdCard from '../BD/PresentationBdCard';

function Home() {

    return <Fragment>
        <div className=' w-full flex flex-col mt-2 space-y-6  bg-fixed '>
            <section className='w-full  section-index flex flex-wrap h-[calc(100vh-5rem)] md:space-x-9 items-center  justify-center '>
                <div className='my-auto aspect-square bg-[var(--primary-color)] rounded-full   flex overflow-hidden border-8 max-md:w-[18rem] max-lg:w-[25rem] w-[28rem]  rotate-45 border-[var(--primary-color)]'>
                    <img src="/28af1fbb-b376-439a-a5c3-a30bb92349af.png" className=' mx-auto object-cover  -rotate-45' alt="" />
                </div>
                <div className="flex flex-wrap my-auto space-y-10  mx-auto md:w-min max-md:px-6 md:pl-10 ">
                    <div className="flex w-full flex-col">
                        <h1 className='text-6xl  md:text-8xl mx-auto'>TAAMA</h1>
                        <p className='slogan max-md:text-center'>Le premier recueil BD africain !</p>
                    </div>
                    <div className="flex max-md:w-full justify-center  space-x-6   cta ">
                        <a className='discover' href="">Découvrir</a>
                        <a className='pay' href="">S'en procurer</a>
                    </div>
                </div>
            </section>
            <section className='flex text-justify w-full flex-wrap lg:w-10/12 mx-auto shadow-md bg-[var(--secondary-color)]  md:px-10 py-5 text-xl'>
                <div className="flex  section-intro w-full md:border-l-8 max-md:px-4 md:pl-4 py-4 bg-gradient-to-r from-yellow-300">
                    <p>
                        Des falaises du Fouta aux plaines du Serengeti, de l'Aïr brûlant au cœur des pyramides de Gizeh, se dessinent les histoires des Afriques. L'âme du continent se reflète à travers nos récits, épiques, tragiques et modernes. Le chant des Djeli du Manden et l'appel codé des pygmées de la forêt équatoriale laissent place aux planches du recueil de <span className='font-bold flex-shrink inline-flex h-min text-2xl'>TAAMA</span>.
                    </p>
                </div>
            </section>
            <section className='flex text-justify w-full flex-wrap lg:w-10/12 mx-auto  py-5 text-xl'>
                <div className="flex rounded-tl-md py-2 px-4 font-bold text-2xl bg-amber-900 text-white  "><h2>TAAMA ?</h2></div>
                <div className="flex flex-wrap w-full  rounded-bl-md  section-description shadow-md bg-[var(--secondary-color)] md:border-l-8 md:border-l-amber-900">
                    <div className="flex   max-md:w-full md:h-96">
                        <img src="/1c8ab84b-33a3-46c8-a590-06919e241e2c.png" className='object-cover' alt="" />
                    </div>
                    <div className="flex flex-1 py-5 px-10">
                        <p>

                            <span className='font-bold flex-shrink inline-flex h-min text-2xl'>TAAMA</span>, c’est un recueil de bandes dessinées hybrides qui casse les codes de l'ancienne BD franco-belge ! Avec un sens de lecture occidental, certes, mais en incorporant les styles du manga et des comics dans nos pages. Nous n'oublions pas notre héritage graphique africain : nous nous inspirons de nos créateurs et de nos prédécesseurs pour faire briller notre voix. Prêts à reprendre le flambeau et à raconter nos histoires ! Notre objectif, c’est de raconter des histoires captivantes tout en mettant en avant les cultures des Afriques !
                        </p>
                    </div>
                </div>
            </section>
            <section className='flex text-justify w-full flex-wrap lg:w-10/12 mx-auto  py-5 text-xl'>
                <div className="flex rounded-tl-md py-2 px-4 font-bold text-2xl bg-amber-900 text-white  "><h2>Ambition</h2></div>
                <div className="flex relative flex-wrap w-full  section-description shadow-md bg-[var(--secondary-color)]">
                    {/* <span className='w-4 h-4 -translate-y-1/8 translate-x-1/8 bg-amber-900 rounded-full absolute top-0 right-0 justify-end'></span>
                    <span className='w-4 h-4 -translate-y-1/8 translate-x-1/8 bg-amber-900 rounded-full absolute bottom-0 right-0 justify-end'></span>
                    */}
                    <div className="flex justify-center max-md:w-full h-56 md:order-2 relative">
                        <img src="/tamtam.png" className='object-cover my-auto' alt="" />
                    </div>
                    <div className=" rounded-bl-md flex-col space-y-4 flex-1 max-md:mt-6 py-5 px-10 md:border-l-8 md:border-l-amber-900">
                        <p>
                            L'Afrique est le continent le plus riche à bien des égards : ses populations, ses ressources naturelles, sa diversité géographique, mais surtout ses cultures ! Cette pluralité, c’est ce qui fait sa force, et nous voulons l’exprimer et la représenter en parlant des “Afriques”, comme le dit Joëlle Épée Mandengue.
                        </p>
                        <p>
                            Nous prévoyons de développer cette collection à raison de trois numéros par an. L'objectif est de présenter au monde un maximum de récits et d’artistes de notre continent et de la diaspora.

                        </p>
                    </div>
                </div>
            </section>
            <section className='flex  text-justify w-full flex-wrap lg:w-10/12 mx-auto  py-5 text-xl'>
                <div className="flex py-2 rounded-tl-md px-4 font-bold text-2xl bg-amber-900 text-white  "><h2>Publique cible</h2></div>
                <div className="flex  relative flex-wrap w-full  section-description shadow-md bg-[var(--secondary-color)]">

                    <div className="flex  md:order-2  md:w-1/3">
                        <img src="/347ca990-4594-4271-b667-683dddc1279b.png" className='object-cover block w-full my-auto ' alt="" />
                    </div>
                    <div className="flex rounded-bl-md flex-col space-y-4 flex-1 py-5 px-10 md:border-l-8 md:border-l-amber-900">
                        <p>
                            Ce recueil est à  tous les africains du continent comme de la diaspora comme nous qui depuis tant d'années voulons voir leurs différentes cultures mises à l'honneur à travers des créateurs africains qui méritent reconnaissance,
                            Mais aussi à tous ceux qui veulent explorer des histoires au-delà des Vikings, des cow-boys, de l'Empire romain, ou des contes chinois avec un singe et son bâton magique. À ceux qui souhaitent élargir leurs horizons et découvrir le vaste empire Edo, les masques tribaux, les guerriers massaïs, les nomades touaregs, les tissus toghu ou bogolan, le thieb, et même le pouvoir fascinant des caméléons...
                        </p>

                    </div>
                </div>
            </section>

            <section className='flex text-justify w-full flex-wrap lg:w-10/12 mx-auto  py-5 text-xl'>
                <div className="flex  mx-auto self-center pt-2 px-4 font-bold text-2xl justify-center bg-amber-900 text-white  "><h2 className='text-center'>Quelques examples de nos réalisations</h2></div>
                <div className="flex justify-between relative space-x-1 max-md:px-4 space-y-6 flex-wrap w-full rounded-md  section-description py-8 md:border-t-8 md:border-t-amber-900 md:border-b-8 md:border-b-amber-900" >
                    {BDS.map((elm, id) => <PresentationBdCard key={id} BD_obj={elm} />
                    )}

                    <Link className='flex-1 text-center see-more text-lg ' to={'/bandes-desinees'}>Voir plus</Link>
                </div>
            </section>
        </div>
    </Fragment>
}

export default Home