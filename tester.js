 var cmd=require('node-cmd');
 
    cmd.get(
        'echo "abc" | python3 punctuator.py Model_Demo-Europarl-EN.pcl -',
        function(err, data, stderr){
            console.log('output : ',data)
        }
    );