<script lang="ts">
    import { storage } from './firebase.js';
    import { ref, uploadBytesResumable } from 'firebase/storage';
  
    let message = 'No file is being uploaded currently.';
    let progress = 0;
  
    async function uploadImage(event: Event) {
      const input = event.target as HTMLInputElement;
      if (!input.files?.length) return;
  
      const file = input.files[0];
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      message = 'Starting upload...';
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          message = `Upload in progress: ${progress.toFixed(0)}%`;
        }, 
        (error) => {
          console.error('Error uploading file:', error);
          message = `Error uploading file: ${error}`;
        }, 
        () => {
          message = 'File uploaded successfully!';
        }
      );
    }
  </script>
  
  <input type="file" accept="image/*" on:change="{uploadImage}">
  