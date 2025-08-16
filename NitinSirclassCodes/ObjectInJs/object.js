let arr = [10, 20, 30, 40, 50]
                console.log(arr);
                console.log("Before deletion ,length is : ", arr.length);
                delete arr[2];
                console.log(arr);
                console.log("After deletion ,length is : ", arr.length);


                const x = 10;
                console.log('X value is :', x);
                delete x;
                console.log('X value is : ', x);

                window.y = 100;
                console.log("Y value is : ", y);
                delete window.y;
                console.log("Y value is : ", y);

                function xyz() {
                    console.log("Hello function");
                }
                xyz();
                delete xyz;
                xyz();