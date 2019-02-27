myip="$(dig +short myip.opendns.com @resolver1.opendns.com)"
wget "https://eD83dNUk4pReBKCR:F8ScVJq03njv8Zww@domains.google.com/nic/update?hostname=www.justinbarber.me&myip=${myip}" -O dns_update_results.txt
printf "\nLast run: `date`\nMy IPv4: ${myip}" >> dns_update_results.txt

#wget https://eD83dNUk4pReBKCR:F8ScVJq03njv8Zww@domains.google.com/nic/update?hostname=www.justinbarber.me -O dns_update_results.txt
#echo "Last run: `date` " >> dns_update_results.txt
