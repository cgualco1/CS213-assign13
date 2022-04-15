<?php
    $file = fopen('/home/gua19006/public_html/week13/data/data.json', 'a+');
    $current_data = file_get_contents('/home/gua19006/public_html/week13/data/data.json');
    $decode = json_decode($current_data, true);
    $append = array(
        'type' => $_POST['type'],
        'skill' => $_POST['skill'],
        'instrument' => $_POST['instrument'],
        'firstname' => $_POST['fname1'],
        'lastname' => $_POST['lname1'],
        'studentid' => $_POST['id1'],
        'firstname2' => $_POST['fname2'],
        'lastname2' => $_POST['lname2'],
        'studentid2' => $_POST['id2'],
        'building' => $_POST['building'],
        'room' => $_POST['room'],
        'time' => $_POST['time'],
        'suffex' => $_POST['suffex']
    );
    $decode[] = $append;
    $json_data = json_encode($decode);
                
    file_put_contents('/home/gua19006/public_html/week13/data/data.json', $json_data);
    
    echo $json_data; 
     
?>


