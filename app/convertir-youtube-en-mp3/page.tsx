"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImSpinner4 } from "react-icons/im";
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';

const YoutubeToMp3 = () => {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [videoUrl, setVideoUrl] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const { toast } = useToast()
    const [progress, setProgress] = useState(0);

    const onsubmit = async () => {
        if (url) {
            const id = extractVideoId(url);
            if (id) {
                try {
                    setLoading(true);
                    const response = await axios.get(`/api/youtube?videoId=${id}`, {
                        responseType: 'json',
                        onDownloadProgress: (progressEvent) => {
                            setProgress(50);
                        },
                    });
                    const data = response.data;
                    setProgress(100);
                    setVideoUrl(data.urlVideo);
                    setAudioUrl(data.urlAudio);
                    setLoading(false);
                } catch (error) {
                    console.error('Failed to fetch YouTube video:', error);
                    setLoading(false);
                }
            } else {
                toast({
                    variant: "destructive",
                    title: `This youtube link |${url}| is not correct . Please try again.`,
                    description: "Allowed Files: Audio, Video and Images.",
                    duration: 5000,
                });
                setUrl("");
            }
        }
    };

    const onInput = (e:any) => {
        setUrl(e.target.value)
    };

    const extractVideoId = (url: string) => {
        const match = url.match(
            /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        return match ? match[1] : null;
    };

    const handleDownload = () => {
        if (audioUrl) {
            const a = document.createElement('a');
            a.href = audioUrl;
            a.download = 'audio.mp3';
            a.click();
        }
    };

    return (
        <div>
            <main className="sm:w-4/5 container mx-auto mb-10">
                <div className="space-y-6 pb-10">
                    <h1 className="text-3xl md:text-5xl font-medium text-center">
                        Convertir Youtube en Mp3 ?
                    </h1>
                </div>
                <div className=" border-b-2">
                    <input placeholder="Inscrivez ou coller votre lien Youtube ici" value={url} className="border-2 px-2 border-red-500 rounded-md py-1 w-full" onChange={(e) => onInput(e)} />
                    <Button onClick={onsubmit} className=" w-full space-x-2 bg-red-500 hover:bg-red-600 hover:text-gray-100 text-white my-2" size={"sm"} variant={"outline"}>
                        <span className=" text-lg">Convertir</span>
                        {
                            !loading ?
                                <AiOutlineArrowRight /> :
                                <span className="animate-spin">
                                    <ImSpinner4 />
                                </span>
                        }
                    </Button>
                </div>
                <div>
                    {audioUrl && (
                        <audio controls className=" w-full border-2 rounded-[100px] mb-5 mt-10">
                        <source src={audioUrl}  type="audio/mp3" />
                        Your browser does not support the audio tag.
                        </audio>
                    )}
                   { audioUrl && <div className=" flex justify-center">
                        <Button onClick={handleDownload} className=" w-1/2 space-x-2 bg-green-500 hover:bg-green-600 hover:text-gray-100 text-white my-2" size={"sm"} variant={"outline"}>
                            Telecharger le MP3
                        </Button>
                    </div>}
                </div>
                {loading && (
                    <div className="flex items-center justify-center mt-5">
                        <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2">
                            <div
                                className="bg-green-500 h-2"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}
                <div className='py-6'>
                    <p className=" text-gray-400  py-3">
                        Vous cherchez un moyen simple et gratuit de convertir youtube video en mp3? Ne cherchez plus! Notre convertisseur de video youtube illimité gratuit vous offre la possibilité de transformer vos video youtube en mp3 sans tracas.
                    </p>
                    <h2 className='py-3 font-bold'>Liberté Auditive Sans Limite!</h2>
                    <p className="text-gray-400 text-md">
                        Aspirez-vous à une liberté auditive totale? Convertissez vos chansons, 
                        podcasts et discours préférés de YouTube en fichiers MP3 et emportez-les 
                        partout avec vous. La liberté d'écoute est entre vos mains, prête à être débloquée!
                    </p>
                    <h2 className='py-3 font-bold'>Dites Adieu aux Publicités - Bonjour à une Musique Ininterrompue!    </h2>
                    <p className="text-gray-400 text-md">
                        Gagnez du temps avec notre interface conviviale et une conversion rapide. 
                        Téléchargez simplement vos fichiers, sélectionnez le format de sortie souhaité, 
                        et laissez notre convertisseur faire le reste. Vous obtiendrez des résultats 
                        en un clin d'œil, sans tracas.
                    </p>
                    <h2 className='py-3 font-bold'>La Qualité Audio que Vous Méritez</h2>
                    <p className="text-gray-400 text-md">
                        Gagnez du temps avec notre interface conviviale et une conversion rapide. 
                        Téléchargez simplement vos fichiers, sélectionnez le format de sortie souhaité, 
                        et laissez notre convertisseur faire le reste. 
                        Vous obtiendrez des résultats en un clin d'œil, sans tracas.
                    </p>
                    <h2 className='py-3 font-bold'>Rapidité, Simplicité, Liberté - Convertissez en Toute Facilité!</h2>
                    <p className="text-gray-400 text-md">
                    Pas besoin d'être un expert en technologie. Notre outil convivial vous permet de convertir 
                    rapidement et facilement vos vidéos YouTube en MP3. Libérez la musique en quelques instants!
                    </p>
                    <h2 className='py-3 font-bold'>Combien de fois par semaine souhaitez-vous convertir des vidéos en MP3?</h2>

                    <div className="text-gray-400 text-md">
                        <ol className='list-decimal'>
                            <li>Plusieurs fois par jour.</li>
                            <li>Quotidiennement.</li>
                            <li>Quelques fois par semaine.</li>
                            <li>Occasionnellement.</li>
                            <li>Rarement.</li>
                        </ol>
                    </div>
                    <p className="text-gray-400 py-10 text-md">
                    Libérez votre musique préférée en toute simplicité! 
                    Notre convertisseur YouTube en MP3 offre une expérience audio sans compromis. 
                    Dites adieu aux interruptions publicitaires, emportez votre musique partout et 
                    profitez d'une qualité sonore exceptionnelle. Convertissez dès maintenant et 
                    transformez votre façon d'écouter de la musique!
                    </p>
                </div>
            </main>
        </div>
    );
}

export default YoutubeToMp3;
