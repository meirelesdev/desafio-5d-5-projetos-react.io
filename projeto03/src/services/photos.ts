import { v4 as createId } from 'uuid'
import { Photo } from '../types/Photo'
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes } from 'firebase/storage'

export const getAll = async () => {
    const list: Photo[] = [];
    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);
    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }
    return list;
}

export const insert = async (file: File) => {
    if(['image/jpeg','image/jpg', 'image/png'].includes(file.type)) {
        const randomName = createId()
        const newFile = ref(storage, `images/${randomName}`)
        const upload = await uploadBytes(newFile, file)
        const url = await getDownloadURL(upload.ref)
        return {
            name: upload.ref.name,
            url
        } as Photo
    }
    return new Error("Tipo de arquivo não permitido")
}