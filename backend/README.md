# MongoDB Ubundu Terminal command
sudo systemctl start mongod 
sudo systemctl restart mongod 
sudo systemctl stop mongod 
sudo mongosh 
sudo mongosh db-name 
sudo netstat -plnt | grep mongod
sudo systemctl daemon-reload

### Mongosh command ( MongoDB CLI )
show dbs;
use db-name;
db.showCollections();
db.collection_name.find();
db.collection_name.find();

