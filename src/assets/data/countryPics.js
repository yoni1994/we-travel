let countryPics = [
    {
        country: 'Australia',
        alpha3Code: 'AUS',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1494233892892-84542a694e72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
    },
    {
        country: 'New Zealand',
        alpha3Code: 'NZL',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1531804226530-70f8004aa44e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1507097634215-e82e6b518529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5ldyUyMHplYWxhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIwemVhbGFuZCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Fiji',
        alpha3Code: 'FJI',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1572810311785-93dbea1e1a3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlqaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1543716349-79942dce62c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZpaml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1556137063-79f1ed788b08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpaml8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Egypt',
        alpha3Code: 'EGY',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1541769740-098e80269166?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGVneXB0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGVneXB0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1613062007442-5df3601c94e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWd5cHQlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'South Africa',
        alpha3Code: 'ZAF',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291dGglMjBhZnJpY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1529528070131-eda9f3e90919?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBhZnJpY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1544598740-cf6d85e2cbc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBhZnJpY2ElMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Madagascar',
        alpha3Code: 'MDG',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1570742544137-3a469196c32b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkYWdhc2NhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1563656353898-febc9270a0f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hZGFnYXNjYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hZGFnYXNjYXIlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Ethiopia',
        alpha3Code: 'ETH',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1573401545579-498aa95975bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXRoaW9waWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/flagged/photo-1572644973628-e9be84915d59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXRoaW9waWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1592977731761-2d58aafef572?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV0aGlvcGlhJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'China',
        alpha3Code: 'CHN',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1510332981392-36692ea3a195?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1517687583203-44844bdf479c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNoaW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1616656899767-e11ba3872176?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmElMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'India',
        alpha3Code: 'IND',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Japan',
        alpha3Code: 'JPN',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Israel',
        alpha3Code: 'ISR',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1554401922-3ac1c68b2715?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXNyYWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1542743408-218cc173cda0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXNyYWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1506972905718-359e73c4c49a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXNyYWVsJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Thailand',
        alpha3Code: 'THA',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaWxhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1521633138793-76551d05e2a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGhhaWxhbmQlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'South Korea',
        alpha3Code: 'KOR',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1541928787372-6e5088530c93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNvdXRoJTIwa29yZWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1546672136-49179bf19b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c291dGglMjBrb3JlYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c291dGglMjBrb3JlYSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Philippines',
        alpha3Code: 'PHL',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1590077211339-724573dc4121?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBoaWxpcHBpbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1579957023433-7fad5b83efae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBoaWxpcHBpbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1537495988501-f9cd94a78f3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBoaWxpcHBpbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Indonesia',
        alpha3Code: 'IDN',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1549982150-1129eb6aa6d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZG9uZXNpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Brazil',
        alpha3Code: 'BRA',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJhemlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1510333337682-fdd0eba357a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJhemlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1504281186-f427c16ed131?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJyYXppbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Peru',
        alpha3Code: 'PER',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1571492913849-fdc97148242d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjY2h1JTIwcGljY2h1fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1526697675318-89790adec369?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVydXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1593460914954-bfe709776e91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Colombia',
        alpha3Code: 'COL',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1532443603613-61fa154742cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb21iaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sb21iaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1609780447631-05b93e5a88ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbG9tYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Mexico',
        alpha3Code: 'MEX',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWV4aWNvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV4aWNvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Canada',
        alpha3Code: 'CAN',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuYWRhJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Jamaica',
        alpha3Code: 'JAM',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1557129603-ff35a0c70e5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFtYWljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1562818449-2634157305c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGphbWFpY2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1614529168796-cb235d6a2557?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGphbWFpY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Costa Rica',
        alpha3Code: 'CRI',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zdGElMjByaWNhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1619305839852-04b1e8d54e65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNvc3RhJTIwcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1565985741257-4b63c5af81f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNvc3RhJTIwcmljYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Bahamas',
        alpha3Code: 'BHS',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1562036861-44811e0b4481?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFoYW1hc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFoYW1hc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1545196766-b826948fc6d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFoYW1hcyUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Russia',
        alpha3Code: 'RUS',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1573156667495-f14c98bc2ebc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1c3NpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1605547332519-fe2c869ed918?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cnVzc2lhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Germany',
        alpha3Code: 'DEU',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1548783094-f92d7c8ae2d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2VybWFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2VybWFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2VybWFueSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'United Kingdom',
        alpha3Code: 'GBR',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1542223092-8c2586cd1c2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHN0b25laGVuZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW5nbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1503414382497-bfd17f3c2e41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGFuZCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'France',
        alpha3Code: 'FRA',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1505753065532-68713e211a3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1604200657090-ae45994b2451?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZyYW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Italy',
        alpha3Code: 'ITA',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1535063406830-27dfae54262a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGl0YWx5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHklMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Spain',
        alpha3Code: 'ESP',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1561632669-7f55f7975606?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNwYWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1529686398651-b8112f4bb98c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNwYWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Greece',
        alpha3Code: 'GRC',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1517926967795-31943e805dae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydGhlbm9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1534172658052-3766e8c102d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlJTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Norway',
        alpha3Code: 'NOR',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9yd2F5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1517904518766-16c4f3ab0293?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5vcndheXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1516832378525-ccd1bbeb9115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9yd2F5JTIwZm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Netherlands',
        alpha3Code: 'NLD',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1557436552-d1d884f1bb62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV0aGVybGFuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV0aGVybGFuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1534824394572-a24ff25bbb5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV0aGVybGFuZHMlMjBmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        country: 'Ireland',
        alpha3Code: 'IRL',
        pics: {
            landscape: 'https://images.unsplash.com/photo-1519987856251-45aa3d9171ad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXJlbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            structures: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXJlbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            food: 'https://images.unsplash.com/photo-1609074474966-3e23106e416e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGlyZWxhbmQlMjBiZWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    },
]

export default countryPics