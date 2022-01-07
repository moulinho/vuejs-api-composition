import {ref} from 'vue';
export default function useAddUser () {
      
      const nom = ref("");
      const prenom = ref("");
      const contact = ref("");
      const dataUser = ref([]);

      const addUser = function () {

            if (nom.value !== "" && prenom.value !== "") {
                  dataUser.value.push({
                        firstName:nom.value,
                        lastName: prenom.value,
                        contact:contact.value
                  })
                  localStorage.setItem("dataUser", JSON.stringify(dataUser.value));
                  nom.value = "";
                  prenom.value = "";
                  contact.value = "";
            }
           
      }
      return { nom, prenom, contact, dataUser, addUser }
}