import './App.css';
import arrayOne from './arrays/array-1';

const App = () => {
    return (
        <div className="w-[1832px] h-[3032px] p-4 mx-auto">
            <div className="h-[3000px] shadow-2xl w-full bg-amber-950 p-4 relative ">
                <h1 className="text-8xl h-24 text-amber-50 font-bold uppercase leading-30 text-center">
                    замкова абетка
                </h1>
                <div className="w-full h-[calc(3000px-160px)] mt-8 gap-4 grid grid-cols-4 grid-rows-7">
                    {arrayOne.map(
                        ({
                            number,
                            letter,
                            name,
                            translation,
                            location,
                            url,
                        }) => (
                            <article
                                key={number}
                                className="shadow-2xl relative"
                            >
                                <h2 className="absolute z-1 flex justify-center items-center text-amber-950 font-bold size-22 bg-amber-50 text-7xl shadow-2xl leading-8">
                                    {letter}
                                </h2>
                                <div className="absolute inset-0 ">
                                    <img
                                        src={url}
                                        alt={translation}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 bg-amber-950/50 shadow-2xl z-1 text-3xl p-2 drop-shadow-2xl text-right text-amber-50">
                                    <p>{name}</p>
                                    <p>{`${translation}, ${location}`}</p>
                                </div>
                            </article>
                        ),
                    )}
                </div>
                <p className="absolute bottom-8 right-8 text-amber-50/20 text-8xl">
                    Skjold Skefsson
                </p>
            </div>
        </div>
    );
};

export default App;
