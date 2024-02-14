// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <div>
      <div className="space-y-16 pb-8 ">
        {/* Title + Desc */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-medium text-center">
            Convertir de fichiers illimité et gratuit
          </h1>
          <p className="text-gray-400 text-md md:text-lg text-center md:px-16 xl:px-32 2xl:px-48">
            Vous cherchez un moyen simple et gratuit de convertir vos fichiers en ligne? Ne cherchez plus! Notre convertisseur de fichiers illimité gratuit vous offre la possibilité de transformer vos documents, images, et plus encore, sans tracas.
          </p>
        </div>

        {/* Upload Box */}
        <Dropzone />
      </div>
      <div className='py-6'>
        <h2 className='py-3 font-bold md:text-lg md:px-8 xl:px-16 2xl:px-28'>Convertissez sans limites</h2>
        <p className="text-gray-400 text-md md:text-lg md:px-8 xl:px-16 2xl:px-28">
          Notre outil de conversion de fichiers ne connaît pas de limites.
          Vous pouvez convertir autant de fichiers que vous le souhaitez, sans aucune restriction.
          Que vous ayez besoin de convertir des documents Word,
          des images JPEG, des fichiers audio MP3, ou d'autres formats, notre convertisseur est là pour vous.
        </p>
        <h2 className='py-3 font-bold md:text-lg md:px-8 xl:px-16 2xl:px-28'>Rapidité et facilité d'utilisation</h2>
        <p className="text-gray-400 text-md md:text-lg md:px-8 xl:px-16 2xl:px-28">
          Gagnez du temps avec notre interface conviviale et une conversion rapide. Téléchargez simplement vos fichiers, sélectionnez le format de sortie souhaité, et laissez notre convertisseur faire le reste. Vous obtiendrez des résultats en un clin d'œil, sans tracas.
        </p>
        <h2 className='py-3 font-bold md:text-lg md:px-8 xl:px-16 2xl:px-28'>Polyvalence des formats</h2>
        <p className="text-gray-400 text-md md:text-lg md:px-8 xl:px-16 2xl:px-28">
          Gagnez du temps avec notre interface conviviale et une conversion rapide. Téléchargez simplement vos fichiers, sélectionnez le format de sortie souhaité, et laissez notre convertisseur faire le reste. Vous obtiendrez des résultats en un clin d'œil, sans tracas.
        </p>
        <h2 className='py-3 font-bold md:text-lg md:px-8 xl:px-16 2xl:px-28'>Comment utiliser notre convertisseur de fichiers gratuit:</h2>
        <p className="text-gray-400 text-md md:text-lg md:px-8 xl:px-16 2xl:px-28">
          <ol className='list-decimal'>
            <li>Téléchargez vos fichiers sur la plateforme.</li>
            <li>Choisissez le format de sortie désiré.</li>
            <li>Lancez la conversion et attendez quelques instants.</li>
            <li>Téléchargez vos fichiers convertis en un seul clic.</li>
          </ol>
        </p>
        <p className="text-gray-400 py-10 text-md md:text-lg md:px-8 xl:px-16 2xl:px-28">
        Transformez vos fichiers dès maintenant avec notre convertisseur de fichiers illimité gratuit. C'est rapide, facile et sans aucun coût!
        </p>
      </div>
    </div>
  );
}
