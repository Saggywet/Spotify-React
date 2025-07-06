import { Song } from "../models/song.model";
import { Album } from "../models/album.model";


export const createSong = async (req,res) => {
    try{
        if(!req.files || !req.files.auioFile || !req.files.imageFile) {
            return res.status(400).json({ message: "Please upload all files"});
        }

        const {title, artist, albumId, duration} = req.body;
        const audioFile = req.files.audoFile;
        const imageFile = req.files.imageFile;

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null,
        })

        await song.save()

        //if song belongs to an album, update the album's song array
        if(albumId){
            await Album.findByIdAndUpdate(albumId, {
                $push: { song: song._id},
            })
        }

    } catch (error) {

    }
}