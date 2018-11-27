
echo "Inserting.. Membres"
mongoimport --db dbsite --collection Membres --drop --file Membres.json --jsonArray 
mongoimport --db dbsite --collection Bien --drop --file Bien.json --jsonArray 
mongoimport --db dbsite --collection Service --drop --file Service.json --jsonArray 
mongoimport --db dbsite --collection Utilisation --drop --file Utilisation.json --jsonArray
mongoimport --db dbsite --collection Disponibilites --drop --file Disponibilites.json --jsonArray
mongoimport --db dbsite --collection DescriptifBiens --drop --file DescriptifBiens.json --jsonArray
mongoimport --db dbsite --collection DescriptifService --drop --file DescriptifService.json --jsonArray