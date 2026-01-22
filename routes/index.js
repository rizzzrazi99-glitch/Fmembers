var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let members = [
    {
      name: "Jafar Swadique",
      position: "Leader",
      image: ""
    },
    {
      name: "Ahammed Amir K",
      position: "President",
      image: ""
    },
    {
      name: "Muhammed Adnan P",
      position: "Secretary",
      image: ""
    },
    {
      name: "Muhammed Afeef",
      position: "Treasurer",
      image: ""
    },
    {
      name: "Yahya KK",
      position: "Vice President",
      image: ""
    },
    {
      name: "Muhammed Bin Haris",
      position: "Joint Secretary",
      image: ""
    },
    {
      name: "Jasim",
      position: "Member",
      image: ""
    },
    {
      name: "Abdulla Sajjad",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Mubashir",
      position: "DISA Secretary",
      image: ""
    },
    {
      name: "Muhammed Uvaise CB",
      position: "Member",
      image: ""
    },
    {
      name: "Ahammed Afsal MG",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Hashim U",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Shibli P",
      position: "Member",
      image: ""
    },
    {
      name: "Abdul Rehman",
      position: "Member",
      image: ""
    },
    {
      name: "Abdul Rahman Eyas",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Razim PR",
      position: "Member",
      image: "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="
    },
    {
      name: "Ajnas TKC",
      position: "Member",
      image: ""
    },
    {
      name: "Nawa Shareef",
      position: "Member",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGBgbGBgYFxgXGBofHhcYGB0eFxgdHSggGB0lHhcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUvLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABFEAABAgQEAwYEAwYFAwIHAAABAhEAAwQhBRIxQVFhcQYTIoGRoTKxwfBCUtEHFCNicuEVM5Ky8SSCosLSFlNzg5Ojs//EABoBAAMBAQEBAAAAAAAAAAAAAAECAwQABQb/xAAsEQACAgICAQMDAwQDAAAAAAAAAQIRAyESMUEEMlETImFxgfAUM7HRBUKh/9oADAMBAAIRAxEAPwCZM5Q1SfJlfVPyjz98Rucv9Tp91hI94DoqpqNU9bFKR1UWHoP73pVeVAMNbAvY76ljoCeke6eT9OvASQcwcXHEXH+oW94hXSoV+FJ6N9IrLpEG5T4uIASfUAK948VIVtNUeAX4wOgUFH3jkTcENqMNQNAR0P6+cNppAHLzcnqfoG84cVTxslY5ZknySCUj0iCbiWQFUyUtLa/Cr/azekG2OoMvTZjC2nKOOV9UVrWom6iY3WI4+ciikMCN3fQ6tp5esc/kSs6kpGqiAPMt9YnkdI14IcbbCeBlMwpkLdlTAWdnJ8Ifk7bhyR1jobJlSlzB/kgIly2AZQK0qMx2PxZHzasA3MR2K7JFAXVTwpkCZlQnVeVJJNrszNbVSYN/tBBNCkEpBZLgbOEEgJ4sCnkARoS01J9FnRTrZ/d0aVImCa85JmZQrKkl8qUaqCXyXYlwHAJSzcdxgCXMQM+bIAslbgMVJUFJBZRJUCOaiwuXD4dTy5ClzJyMvjPcpIUSAzAuHAtlF2YgHrnsVUVKYBk6tmd2c2uX13vD9dhUSavxQZRlmEnKzBLMLHKSTxuWF2gSutLul0njm+TANESpg4bNHkgAqD/J/Zw8Qnkk9JjnsxmAFy5c8XZh7e8EKaWgy7hyELIPoGI2Yu3UxZAklIuMybk38R26AaaX1MKXhq2dAIYlxvoCX9vWKLGk7GUSjQ4gqW7M7KALObggl+ilDzgh2XpwpedbMMo8VyVZgpKU8SQkhr6xSVI8RITa5sOns9vOD2GT5csFQ8JQghKn+HMO7UpLj4vESDrYXh4Rb78CyTSPah0SKiUAHPdKYbZVOW15C+uVRvE9HWTCpKs6mX3eiiyczpI1/OlI8/SqmpH8cKQlIVLCQlLsgNMLgku7gf6ukRYOsmVlLkkKQOd88u+r51EPswinkQ6LgFcDLMssFJKgEkMQAspAUORsToQtJ3gVVUs5UwryTNbEhRttdr2YRTlYgCSsEFwFfDZlBKLANqWJHFKeLx3XBllclBKnDBjxDWjPky/S3XYjTvRxT/D5gL92ptxlO+sUKzBJoUwlrI2ZJj6GynifWGKlnYn1ia9c/g5pnB8Gw1ZJkzJawiZZyk+FX4VeTkHkoxDjPYerlpXM7pRloDqVYM2tiXLchH0BLSeJiSrpkzZS5ag4UhSVDiCCPrAfrXfR0Yu7PkmfKgbUS2jbdruzy6SeqWpynVCvzJ/UaEceojKVUu5jc6atFYu0DFJhpESrTDGjJOGzhrROCAljc/KIwWhq4nqOzns8aHU80oUCIYIbGeTaaaGLuIIf+INDr1+/u8Uos08+xQdD92++EV1Bi0DNUvvXn/JyPIUKFEqCTIUCGUWbQ6+UeRFCinL5Rx3hVEdj6WHmfEYhm0i3cM4u7BnHN8x9IenElbqSf6pd/WWU/wC3eJUYpqFSgW/JMBP+lYS3rHrbPMpldSlDYeuX0zAPHuf+VQHFi3rFg4hJOudH9ctQ/wDJIKfeHS0S1nwLlqP8qk5vYvHWK0D5U8uXUSHswSwHnd9YtIqABYgeo+f0iRVIHYu/NlHhqQfsRXrMPYZkKyqGm4f+a/yaDaDoFdrkITTTTlAVkOltbO3nwjnvZyVmmpSEIUp/CVKmAg6g+BaSANX5Qf7Q4vOKJkmZLSk3Csr/AGRu8C+xU6XLnd6u6gwlJ/nUQhKjv4c2b/tO7RHL2jZii1HZ0yvqymYimQSnMF+LMbDTMdyc61Ku9knjFfH6FRDAqUlS1KLv4QJQTLSAOJCCeqyLExbpVpmVRnBlKQlEtN9yrOw0cnu5YLbLVwMDe1eLTEpVLQFCYou5UMyms5Y5QNGD/OBG7KJAOunLEtMtdpisyQHJVk8BIU5YDwq5M1rRja0quSkMfxKSATzD3YxfqqmcU3SlCx+JQJmq4ZVEMNbBLabwGnU8xyVA83hpydaQ1EOeJ5UhSyA1zwAGpA+sQypZJAG8b/BsDypSSL68ff70hMabWxkrBvZ7CFJWQoFiW9C138zGom4fslg9hwFmg1QYePiIubw6dTuW2huSukVitGElUQCiFDwPc9SSPcj7EL92CVsoeEmx/t96RsThyEklhfWK2N0Se7bK/Maw8Z7BKJg1BZTMDXKVaaKAJt6v6RewWd8JA8WqU8S4yHyzk9URO+VOZ7pVw4k3+Rb+rnHtFT5VEAMAtugzKyt5qWPSLUQZawiQllyndIUoIDfhWLX1ewL7ZeIjb4Z2nqJcqWlEwZQkAJKUEWAFrO3naM7hUhN12cAKQQ/hLlgePxcGs2wYhh2HhThM1KV3Ilq3e+UKJABcsBppeJTUX7iUoya+0Po7dVI17kjmhT+bL4xNL/aHN3kS1dFqT9DGQXKe2ZJPDxP52YHziLuF3CQ5P5SlXyJhPo4n4I3JG8lftIH4qYjpNB+aRF6R2/lquJKgkDxlSk25hne19tuMctmSiCXdJtY2++MW5s7LSTFfnUR6KTK/9JMB+lxfAecvB0nthgMuukMCHbNKWLh2sXGqVCx9Y4RW4flUpKgQpJKSOBBYj1EdD7A9qTLBp5l0XUniN1BP+5v6ozHauYlVVPUggpVMUoEb5vF8yYfBCUG4PoaLdmIraUC8DFCDmJm0BFQ2VGhdHksAkObR4qEDHqy5eM7jaOGmGEQ+EEvprEZwCiOHqvDSI9EQS8BGiFDiISRA4sI2FDlJhR3EB2Brb/f37wwoDHU3toPn5nyi0lDjk/35R43mX3sPvnzj2TzhtPmTv5+seT5qVHLMQgg7kA/VxvD6kPt98opTCo2DHQ8g9tuhHlHHJFqVN7ghSX7rcB1ZNsyH1SfxJ+oGUxUTQtIKSNtC4vcEHcHY/WwAUk43AuLZtxcaji/ptD1L/d9SBJUbEm0sm5BNzkOu7G/EKVoLVg7t8tCafOQO9UyEndtVdQB6FVo5qiaUkFJIILggsQRcEHYwW7U40amdmDiWnwywdW3J5k39OEBmjFlm29GvFHjHZ07sLjomomSlJ+AJXYOD+FT7CyRzhnaDEJk+ekvLTlWCVGzpyhWh+LRmAJ0GzxiqHHFyUBEkZczGaogErYk5eSWLNv5kRtOzsiXVzJbO4llRfSywkpvukK16RXDJNbG6dj+0sgKYMWS2wcDiB+pMZwU+ZASbgBg4vvodQQeo9BHR+2OHFOSYkWa442AL8NB68ozlHROdGHrFuSasti3EG9nsBSFgm55xv5FJawf746QzDMNShlM/WDEiYHZifKM85/BWiKXTqZgB9/OPVUYTqXMFEr8m6E/pEaykAqPvErZylQGrJfCKFUl0sdIuVOJIdnuNoGTMQln4SPvjFopnNoF1eFBYLDnFOW5Q1/AVBQ5BlD0Lsf5ucaKjqLhrwNq0lEzgFaF/R/No0Qb6MuQE4KuYFFz4STYfiOYs/IRHieaYsKBJAJ8I+bbn6QWxiYmUiUUhsySRbRlEEetokwiQ6kKTcK0PA+e4LQs35NXp26tF5c+nXZU1BXorMcpzbuVMDd7h4enDErHhcjiguPVNjFXEP3JKiJyAhQD5ipYcZiBlSmxIbc7RW/winmXlKmPcoyFE0kDXKlAsoa5Sp4KejzJwSkwh/hatBNWE8EqIEDO180Iky5Y3VxJNgXc7l1AxYkYZVZAuRVmYkhwVkt5Ide4a41DQG7USakplrnBJAdIUkAB3uFsAx8PsYaLVgjF8lsHUdQQoFJYguD0gvjMoECamyVjQbKGo+9iOMAcORmmIRo6kj1IEaLD1hTyl/CvQ/lV+Evs+h6vtFpfJV90ZHEkBucAZgjU18kpUUqFwSCNIztXL8Vt4nkRRdFWPUmFCjPQSwikKz4L+zdYgTLNyNrw+nnlCgoefMcImMpSlFSE2L/3eBxTFtopvHgiabTqTqkjyiJoi4vyOnZZlU3eBWXVIdt2/t9RFURaw+sVKWFpALbHQg6gxFUtmJGhuIMopxvyBXZIuUCArQF78DuPcHzhQ2nqMrggKBax0cOx9z6x7EuJXTOzqkgDM2jv9YhCAxYdWIPD9PaJpsxItx8xv6ae8er2fTl0O1o9E8oYtINh/x9tFabTuwYZd7P6e/tF9B21Lv935Q0IuzObbff1g2cUpcpjts/29v+YyHb6vUMskfCXJbdmYffCNwHUcqElbD8AduRUpkJ6EiMN+0ajWhUtSkhL5vxZjtrYAeTwmR/ayuL3KzHSil/E7cBvyjxanc8TDIL9l6RE2plImNkclQJZ2DtGBNs2N0rIv8IWKY1JZMvOEJfVRLmw4AA35emt/ZMgibMmOQlORLbEqJ+ifeIu3y8kmnkANqop4ZRlAtt4lNBv9nNOpFEShs81U0gkWACe6Hu/kTFuFSok53GzpFVTCahSFB3dvNx7a+UZWjpgnVgeDRp6KrenTMIIUpCXGpCgGUD5ho5niGIzkzDMK2Dl0lK+La2D+kGCbtFcUuLo29NOALG42h8/ERLOlvu0c6PbQvlsS9m0grRYv338PUnbUjpDfSNHKw5ivbCVKG6lHRhbk5jJ4l2ymTiwDJJ1IIBu3h3P94mxjA1SzmUmx5fMRSk4epMxK8oVbc6P9dPUxSEIraFkimrEsxuVhyWASWez7c0+sWaOoC2yqVruDGlpMKStecSEgvckk6j4gm4d+UH8OwVMtOUJHMtDSyKIkW32gFSU5SATrFurQCLjiR0t9+XoSxBISGgVOmWN34D3/AE+xCRlew5I6I8WkDu5alfCM6Hb8wzA89Nd3h2G1KAhCg6hqyRqr8o/WJKhBm0i0hioAqHQKduNwlY633EeYf4UykICUp/ClN1KJtcnnHS2jvTypNEq+z8uelMyal1sRmB08Siw5AkxU/wDhVAzJExQCmfMymI0O2jn1MFqpK5aikLWkj8OZQHDRKk5nY6vECMWmDVQVwzJS3kAgKP8AqhouS6PPyScpN2A5fZ+qkH+DPKQ5tqOfhUCIrYpiZl50TlhZUEuAEeIgveWC4IIbMrK4FszARvaSf3qFKITmQUhWW1jocuZRGja8I5FjszNUTVcVqI6Zi0PH7mND7nsZgyCZqGuxfq394LzUxU7MSwZ4JuOHFuHN2g3itNlLi4O4+93B84sjskqkB8VPeNM/FYL67HzHuDxjM4hKMackXfQ2P37wIq5BBIgNaoupXszyJZJaJp9KQHh81JB0h8+tzICTp8olSocHxPT1BQp0n+8QNHrRFIVqzX4jMzSUzJYCg1x5XjLSJQWvKDlc26t+saLszUNJWm5IU7ciNR6QLVRNMCh8L3PC/wBIaSszYfscogtSSCx1EepuG9ItYqSZiiW12imDEnHZpTtHkexJND3AYHbgd/vnCjuAbO3rpFM4BI4AE3BD6M3K+kVlqIFyANDdyNd9TBLFK2VI+JYClCyfxODZXJOt+D72gN2rlGfJTUy7J+GYgfhVz5H5gxdS2r6ZDFg+pF12v8E0jFUFaUSwFrLXcJHEsTr0EG04c95hMx/w3EvTTJv0U8cuEws24uOnD6+sbTsXiVVOzI7pc+WlPjUktMljYpUT4t/CblraNDZI0rFlhpaNDWVyJQYs4HwBgw57JHXyfSOW/tFxLvu75Es2nluep9BGlxySoEKSsTJMxzLWn4Vcc2+caF7xg+1ZugdfpCyiuDYMUKlYAyxe7PyO8qpCOMxHpmD+zxHIk+GYTqEP/wCaAPnBTsWhp65xFpEtUwnRtE+ty3TzjLVSRqk9M97c1eerWAp0oASDf+pWuniUfSNFiPaGZhwp5EpEtWSSkzAoEjMSVFmIa7nzEY7B6c1FVLSb55gKuj5lewMWO2FX3lZOPBWXplGU+4MFT7YnFaidG/ZN2gM6XOppivGgmag/yqPiH/aogtwXyil2jw6bUT1L2R+BQsVDnv8AiY8hGH7F4r+7Vsia7JCwlf8AQrwKfoCT1AjueMU4QFszH53Pu/tAxy4uhkqZy6mwk946ZeS4Uz5gVDQtycs/Hyg1heHFE5E4kkvcnmnL02HpBVMok6gDlE8yU6paBo/qbD6xdz8GjjWwpizFKXuCBCpMOlLYKBB2I1ES1KPAAdi0V1TVJZW2vlGdN1SKUmgpKwrILKKhw0htRNIDAdf+YmkVLhwbGK1cp3hbbezkgDik17QAm1A+HmPnduejecGaxLvGRxFRKgBrttwOvnGzGiczQ9npmVIUprqIPMBwX5Bz6QRpJRlVYDugXQeRDg2G4LvaM7h9S2pvdR2y79Ht7wckVaZipahpkYbNkUpgPIi3ODJGZtpsu9r6kImpU/xSwQl2chTFlWA2e+8DXzpJXZPElkjQl1afSDGOYd+80jBSkzZRzjIElZH40pzWdQDjTxBMcyVU0koZplOudNckd/PMwi9s6EhIBZvCSrgQISMnVJdEXjs2uCY9IlTFhC+8cJCu78SWOd80xxLSPhZ1O4sIGTcNp0KAyd+bHOSSliAQUywwUCNl2e0Yet7RzZhdWUJHwy0JSiWnklCRlTbgHO5gthGLlQTfxJ04Ebjy184rDb7C8bS0dIxnAkfu8urlISkgBKwi1nDFhZwQBpo3AQMmIExG138j/wAl+ilcI03ZXEkLkmQxWJgUG2BI3Ubaba8BAZNH3ZUguC7F9iD9+RMCEmm4vwZ5fJkqmlykg67xQnycw6fKNhiWG5hmGosfp+nlAaZSZYunaKQyUZGpp4FT6do1ldS3toYGzqeBKNmmMjPpkkxImQYLmke4ES/uICQ5ufTziTjQbKeG1apSny2uCOsFqGUifZPhU7t9+cVe6PIiLsmYJQSsAP7+0LZOcLVx7A2MYJNlqJIzAl3HPlAjLyjdTscQsMtN94FzaVCy4uOcBpeDsUptfetmekKbUOOEKDxwxIsQQDfR/Q8IUdY/JHs2oWtZmLUVKN1ElyfvhGu7K4yAVS5heXNGVb89FdQW9BxjIKQ0e0s7Kptjp0ijSkqZrV45JrwF8ZoTJmqHA25jY9IWG41PpioyJikJmhlAGx1DHmHN+cE5qv3iSN5kthzUk6ecA+4IKpagxdgDYhQsxG3CHg+Ual2T9TjUZco9Pa/n4FPxJaO8RLdMqYrNkJzAEaFJOimcONQb7QExRDygq7lZHolz8xBGYhxzENq5LUstZ3mTW8kyxAyLRFAtSR/1HJCRfX/MlRFRYh3ciegfFN7tL8EgqKr87DzixMUGn8+7S/RQ/Q+kBlaxgyukg1Zq/wBncv8A6lU0jwypSi/B7P6FUZiZNKlKWdVEk9SX+sPp6tcsKyLKc4yqbcEaGIR84S7aXwcluxIS56x3vs/iIrqFJf8AiyxlWOYGrcxfzjh+HyXU+wjY9isZNNUXPgmMlXAPoT0i8MVxvydI1oSUqY66QYwoy+8EyYpICGIchIclg5P3cQsZpQod4jTV+Wn1gHXUneSFo3IYddvdoHZeMucaCmLY6iWhaFFlgmxsXMYeZ2grJswZMolC3NXSM/iC6hGVC1ZkJ+EasCdEkhwOW3CC2CzyhpgPxFgOAuQR6RWMIo5SOkdju8VJImWOYtxY3i/VpIfeMbQ9pFAlQLuG4bt8wfWPZnbB3TmuOI1td4k8bcrDzL2ITcuY2+9usZJa3W6iPis4JS2hBYulr6bRaxHEkzEhUslwTmRfMNzfcWLQLlzhcqNiSebjz3t0zRohGkLJlhVR3blQ1F79C49B1eJ5WKCXJSs2CVKy+iXbza3PrAXEagMliNksXtdyNbXeBddOUoJD+EH9SPmfeKS6I9myxvtNOmSQZJKEEeIJsSGvmO3QRha29x8JgpgVUx7o6Ldups3npEcukylSD8J0+/vSBxTVISOm0A4v4RmzgOwcfPVt48XSsSOH39DEedlAn2jPxcJDnc+yuRISlNmFuPHXa+wtpBLtHI8QmjRVj1A+o+UYDsNixU0typmylnIszFtto6eKdUxBQvwg6bkcPvrHSuMuRjyKmZ2SriLaH7+9oFYlRZVHhtzEbpGCy0JJUqzXJYDz4QBxKtoz4UTVzVJ2kyzMbqoeH3ho5U3oTizGTqdooTpA4QSr8SkuyRfgqbJf/QhS1RWUVqDiUs8xLqCPUSbxpUkUSkCe7Dwq2kIZtDpzggqW2spfUpWn/elMQz6wLtY8Q4Py0MCTvorGwQQRDSqL08g7MR93ipMlQEkw3TohKAYcaEpNlC3D6R6ERPJQpTkAnKHLB2A3PKOcA2XKOcEi6s306PHkD88KO4HcU/Agtwwubv02b3ieTSZ0nQK23fpwMUZM7K5Z3trD6eoKSFJJJF+YjPKUl0fQ4oYZ7m7Yaw2eqWQWuNQdxuPvnEuI06dU6M4u+/s2nlFf/ELpLeFenI8OsEaYBQbS9uHMffKHhNv7iWf0sF9if5X8/INqZTgTBxZfXj5i/UGFiqHo5XAGfx3yl/f2gjSJQiYUTH7uZ4VHgDoof0lj5EbxH2npTKp5UlQuP3jT+pAccrAg84pOVqjyMkODpmKqSB3oa/eIHK2f9BAxdyYK4pLIM7cd8A/N52zltDApIvGLKrpAQ3WHKN4SOMS0knOsDzP94jGLfXkYK4fLypAOpuYtZBeISYmQqPViklQjOjdiMY72SZSrqli/NLN5xYxyplyBdvEH/pcgAn/yLco57htcuTMTMQWUk+o3B5Fo0XbhYnyZc6WSA3iG44OPaIZMdSvwCLpmYxNSScwmjVwRcnydwbmzbAQ5SlTcolS1W6gO+rkPyizh2DCy1Xs9tYI1mMCSAmWLGwbj9/SCi6paK0nBJ67qIS+tvLzh1R2aZNlHNa+/nE1Fjc6YMoSCT1P9oOKplBClLJCkuW3845uhrOe1SjLVlJU7G7/eo3iimrU1/wA2g+nmPeLnaWe8xw7Hp56cwICd5/aBPJxJN7LM+sKgEnQWH9+MXJEklAfW/oQYoUUgqVy3jQ9yQl23B8nH6+8HHb2wpaAKVMpB4EfONHRTgsAm9ylXXQ+uvWAVRKDZhYbexb1eJ6CpyTVB/Con52MUWmSmrCNdSMSOjHjw+cTdnuzJqF+L4dzt/eL8qSZgY6p0bccB840uGzBJRdktc8B1P3pDTSIyyNKl2arBcOkUssBISDxs56CK+JdtU+JFMEzFo+JRV/DTzWrTkw1bV7RgcY7QqnuM6kSfzAfxZvJCbMDxLWubWNCdiEumSO9QCrWXSguhAP46lVs6z+X/AGi0ReNdyEjjfnsMYhXzZ/8AFnTc6HtMnBSKd+EinT4pyhxVwuBAvEMckoSAxn85xyyh/wDTppfhA6k9IC4vMm1Su9UsrLM5sAw0QnRKWYgCwIIikmgSC6i5hZSrSX+jdi9LOatIKT+2E8jLLWtA/LJSmSn0lgH1vFdCqufpKnzH4qWsephiapCdGtD/APHVbLPR2ibnXn/w0x9JFP7pItSOy9e4KaVY6Lyv5ZosqwvEkDxU1QodO/HpeKcrtItmzq5eIxPT9ppgNpqh/wBxgLJLwy/9HgfUiOfXTEn+PIUm+uVSF/6VAA9A0WZOSYHlqCmDkaKT1SdRzDiDFF26nMxWFjgq/rxiOdU0k0grpUoV+eQoylA8QA6faKxzSXaJz/4tyVwaBK0QxCil23DGNGrDJUxP8OeCvYTE92VciR4c3MMLabwErqJco5ZiSk89+YOhHMRojOMjBL02TE6mqKOSFE2WFBKJAic6SUmxBYw1E0guLGIVLjxJiBqi2ug9g9SFky1gXuk8Ff3ghIqLHYgseREZmStr7wfC8wE4b+GYOfHzgRVS/U0yyyyYq8oKD+Kg/mTEWNzVzEUiVXDKQOP+blZ97ZYjop+VQPrFvGRln0eXQrRxa89JPSHmq0edmlzipPvyYrEiFGa3/wA0lv8AumfqIFZbE8wItylsoE3c3PqT11BiKolZS38x+Q/WIzXJWRRAUsBBbCqU5SrdXy+/kIHSpOZYTxLfrGoloCWA20g4YJyv4HUbKC5JGojySeEEKlyxJPARTVLaNSFkqJUh4IUVRZSFEssMTuP7OA/SByDFhCd4erRNluVVlBKFDcszl/7M/pEsyRJmFF9yfP7+Yh9MJczwTNLMobbseW33YJi3eSZhC2YlRDaevCw9ozzjQ8JmiRXy5ZSlk+FRBy2cE78gLf8AcIp432lJJS7gP5j7b0jIT65R1d778miBWdVy5fl1/Q+kT5pDuR7WT8x5OWhU9JmBJLcOZt6WMXKPDtFHW1oK1Mm4fWAsTk+UgqJDh9PlA+3/ALReqFshQsLXPDcDrFYzwkO/nAWuryqwsPvXnFZSUUO6ih5nA5kAu5JSecUmL21jwcYM0UoMJpDk6Dno/SFVyIGswGYESwpRZYFzy2b70MQ4tNK9fhOif/dxv+sDKOpIVnVfgNjyPIaHiS3GCk4gg7k3c+36Hm0aUjK48Z2CKiq7k5ksqa1ibiWOI4ncc78IGCl/FNckkkubk8VHjyghVMgFSrqOg4czz+UZ6pqFLMZM78HpYowxLlLb+P8AYWlYon4DYbNt/wAa+sUa3vCS9mf+7ctx1iASghibmLomGcmwOYMC1+hHQ26GESbjUu/gXJnnJ2CT1JjwjlBP/DgCBmGYu4U6cpBYpv8AErpFuowdctIUtRK1AZJaQSVDR1cEjR99In9Bv8EeQDTLtqOm8Ty6FZSFsQj82oHVnIi2KGYkZlyQQeLhumUgCH0FIZi8skKNrgIzqFti3u1ucFenR3IGzENosK6OPmBEgnTEM7jdi8aufg0umlPVUdUkH8YXLAfnmlFuDMIqyOydRU+OVLQmWBYLnyQsj+YeG/VIjniryGOVx2nRSosbIsr+0aigx8FHdzAmZL/Irbmk6pPMRkcawOdT/wCYhKWOUtMlrvzylxvrwihTVakGxtAbcXTPRw/8ha45No3k/B1KGaneYgnT8aeSh9RbpHkBMOxZSQ6VEFtjCiv1ZfJqXpsMtoiThClFgpJPWPEYakPmWA228M/f1Na3NmPrFdc193O8ZU5lpf0y3GNj5gQLAQUwWoSlWU/Auxf2MA1GLFKY041qjI8qUro0n7uUKKDt7jlBhMtWWmWtiE94pI3Jlha3bg6UwOoz3skK1mSteJT/AGg5UN+7U8wBld1VknZjnQm39Sj9iLKXLTMXrMagua6ZyicbgC4AGzXyh+t3D8otyECYkOfEh35jb5NHuI0eV1DQ6xTop+SYDtoekL7JUzKXsBkOVLI0sOp/494NJTE0ijEtIbRVzze/6ekMLgxaEOKoaMkJgzQ1Um2jw6Za4hoWYZoMpJlNaWLRJLWYlnyrA9RHlLJJUBxMMmSZr+w3Zsz151fAm558o2GP4FInMmZKQoJsHFx0IuIK4JQfu1MlDDMzq2uRoT7RFV1KUoK1qASkFSjwABUfQCMMsrnO/BknJ2cc7eUlLRTJKZEpPej+IsLKpiMuiUKSokF2JO7NxjfyKikXSy5ktCUyVpKk2T4SScyDexSpx6G7xxbGa9dVUTJyvimKJb8oGg6JSAPKNL2CqVsqle05C5iRwWj8v9SEqB45U8IkpNz/AAbIx0rCNRSSe8JQxD7XH9oG4wli5tE8qeEryqsYodqKnxpky/FMUQMqbkE2Ab8x4RslJRVstfF7M/WVJUSNhFVKY7ZSfs8lSaRKJgBnM8xQv4jdhyHw+T7wIX2IGw9olFKf3Nmd543s5fkJ2gvhUo3KvhAHrs33vHQk9iJKZZWpVwHb9faMZOQMxSLBKlexI++sXgl4OWVS6PJ78h8g30HuXi12emd8SnRKQ5J/Lp6q2HFoH1rqSEAOoswGpD2A+9Iv1csU6BJTqnxzlDQrIJA5AAMB14w7b5Uc1oj7QUoWfA4SWvuobEnn8wYCT5SZQsxJ4xsKFAnSyNVMVJ57qSPLxjoobxlMWpi+npHSWtdi458tMEoQqYpgLxtcExpNNKMpKAiYoZTMsrK7EkN4s5FnszvyjPUkkyhmtdr6keUFMOVT/EsKUp7XYvtZva2sShjrb7HlT7Cc7BaRMgTEKVUTFnwI0ALWKglydhqHbeKVB2Pq5pzJyStTZQQBd28J2gkjBJs95gySwfElIITksxSAnle973u8UcRXOpmQmcVKLBSQkkAcS7XLCzcfNmk0T2nxTK2O182Wj91/eO/B+M5AwYeFMuYRnI14DS170ps6UUkpkTJJAvlmFSPRYcafmMG8GqamnQuaqllZG8UxQyqJd7KVqdbCzwKFVT1E1c2oVPBJdKUISodVF/YCE6YyYzB8RlSj3i5UupXcBMy6E/8A27ZyeNx5wYkYpS1i+7GG00pYd5pnrp0ID/EoAt5Mb7HSAddXTQvLJnzEJAf/ADSlhazOL8okTj1MmXkVQy5y9VTZs2bnUePgUlujxPJoNGkosIXKV/0lfR1Cw7BeZRSDqEFSSm7ByGJbhA7EciiuRU0stFR+GaiYhEt2e6gchHIXezWipSqpF/xFJTR/kEkzZsw2IdeeayU3DMxLHi8bKjxGaiWkf9PWySCEyUyymblbVMkZkMm5JO3lHK6JvT/iOZYnhU+mymYGSt8qkqCkltWIO0KNuvs3IxElcuZTUJT8VO0wKH8y0qICSQE/CG5x7GWUGnovHNSqzISQoggO1nHFnY/P7MRrltDpFRlIPrCrkFLbg7w3GUto9pzhGNeSBC2OgNjrzDeu8T041vp73Gnq9+B6RUixKXw4X6RpgqMUpWGMLr+6UFAcjzBjX4lVJBMofCKWUeYJmJm+njv6RgqeWVEJTqogDqbD5xpe1c0d9VlP4MspN9R3iRfylkNz4CKNbTMmWbklEG1MoEcj9t5Rl6+mKVtx0jU4XOEwZCbkW67eunVuEVqmizqSGuFj5h4plh9SOiSlToNJknJ3Z+JFudrEQOWIPVIzIE8fEkhMz/0q8wGPMc4G4hJ0UND9kRRGfHPdFeWl7GGZbx6l9tomlJfrAejXHeh8mTmBBt+rwd7B4MV1qAoOlDrPDws3/kUwHCmjoP7NJYEqfOO6ggeScx/3D0jPmk4wdDZlGMTQdoqkJB463fb9NY572/xTu6Hu0nxTyEkv+FgpR6WQngyo1mOze8Ukc/LWOWftTriqclINkoDDmokn/wAcnpEYLjDZiguU0ZakpiuRUzQPg7odEqUR8wgeZg32cqUyKmRMU+VFlNcgKlqQojpmJ8o1ErsvLly1pllhU0aEkLLgTQUqUX2AXl6RmUYLUg92uUpC7Z1EHIkZsvxBwbkWDkuwBMHFjST5eTQpp9FLtLWpmVKlSczEjKGu5Z8oH8ztvpGo/Zl2bKKn96qGeV8KCfEJh0K/ylIdTaglLgRDS4dKp1anO3xsBMvskOe5Bvq6uLAsNCJyZVOEyxlSQ+tyVMS534dEiKSxqQmXK2qRo52NhRLaekC6rG2OVJfizN73LC3nGNp11NUvu6RC1pBZcxIBs9zmPhSP5leTtFKZhU6SXmLIUCXInPw0uyiOAfXeGjGN0iKxfLNriWLhMu6mSbmMEqsSsrWEkJJcPuOXU/OFXKXOKUF15QPChLlV7FTFh7C0Op6CesgFAQnS/wAXVoqqiVx4+Jc7OUrKXVTGZAUQ+ltfL8P+qBeLT1GUA7GesqV00D9I0OPES5EuSm2e5A/Imw9S48ozlYl5qU7IR87fQwqVqyrLWE1ndqSnMxGUuPwkaKHQ/WCuOUoUBNQGCndI0SoNnSOQJcfyqHCMcue04nyjX4VVOgpOimvsCPhV7lJ5K5Q8XZHKnF80A7CHop+9IBYDbZt3tfaLFZTscpFucVe6APgJB9h6wWiidoJyZRkHKipUpSmZKQSEnipRZtSGD6mCiZNTJSZpkSwWJUtZGYWcgBSmezgAPtvFHCpU+SlU0TKdIF3mC55A3P4uES0uMqqFPUpnlJAypSgs9mUVXAAc8/WE6Yk3a/QHVeKidMKqkTlpBDBIAB3cqYhI6D0iWqxmSEZJEuVJUvwhR+NLsLrV8A4ltrNBWbjCUBSUU8sF7JWnNvpcsW5wFmqlzVmZVL7xbAZUEAAbAMMoA0YcfQNPwCNNdFDFcHly0P36Jyz4lKlkqSORVofLhAJCCAFKHhJsOLRoJtCiapSZUpEtCAM6yXI5An8R4DhAPEJKUlgT9PKIzj5+C0WWEV8slhToUT+ZSzs35gfeNZ2WpJSlKVT1KaeYlIKsye8lkOCEpBJWlIIBe/yjBKBS4NjuIN9m6BFRMEoLMhSi3eElQYg2Um27F3s28TjK3tAnHR0WqxubMSkVkuhVLv3dRUS5hkzCGBEs5QpJu+UtoWcB48izMxfEKHLKmLpZssg5BJSuYQAzPLCcwDGymazPHkdxb6okvxf7HIjBuakGkSo3Lqv0CSPmYUKKYvJ6WXwAonpPiHUQoUFCvsN9nEj98pxt38n/APqmG4pMKpSlKJJNTMc72Qkj3Wv1hQoaRnl7gfh6j3//AGfpG6lyUmspnA8aZSlcyqWFE+ZvChQ8en+5DJ/cRPhSB360N4VJmAjiAkke4B8oFgPLW+zEerR7Cii7MnkFgsbRNL0hQoMj0odnilR03sbagRzXMJ9W+ghQoz5/av1I5/aU62Yc+umn/wCMH5kxy7t7epU/GUP/ANKIUKEl7GTw+79jU9qq6ZLEhKFEBU4uLX8UsfU+sLFJysiA5YM3L+GVW81E+cKFFV2CPtQCSfEDxgn2umqFIGLOEJ8ilIIhQoeYz9yOqz8NkysO7lEpAlgJOUpCgT3aFOrM+YuSXLn0jjvaj/MQnYIlgAWAFywbbxG3OPIUZPSe1hf9097KrOZQ/lfztGpyApJI+2TChRefZczeM3qmOgRKA5OHPvAZX+YrqPk/1hQotHpC+QDO/wA1X9R+caXCrFI428oUKJYe2DL7AjWIBQ51yv8AT6Rn1rPGFCishMPtLmEICpiQoOOHkY31DUKRmysGDWSnT0948hQk+hM3Y7B5IrSpdV/FUlglyQAMyxYBgPSBOPYHTy1zckpKWSSMrhrHS/KFChf+1CQbOf0KM2pN7/EdeOsNxqSETBlcWB1Jv5woURl7DZ5B2pvfWHrUUqsWYDTpChRmXuGO2/scmEiep7gSkg8igLPqokvHkKFA9R/cZil2z//Z"
    },
    {
      name: "Miqdad",
      position: "Member",
      image: ""
    },
    {
      name: "Afzal Haris C",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Sinan KH",
      position: "Member",
      image: ""
    },
    {
      name: "Namaz Hussain",
      position: "Member",
      image: ""
    },
    {
      name: "Midlaj VP",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Afnan",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Razin KK",
      position: "Member",
      image: ""
    },
    {
      name: "Muhsin P",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Safdhil PK",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Shaheem K",
      position: "Member",
      image: ""
    },
    {
      name: "Danish",
      position: "Member",
      image: ""
    },
    {
      name: "Najeeb Mahmood",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Shibli",
      position: "Member",
      image: ""
    },
    {
      name: "Shakirul Bashar",
      position: "Member",
      image: ""
    },
    {
      name: "Muhammed Basheer",
      position: "Member",
      image: ""
    }
    ]
    res.render("index", {members});
  })

module.exports = router;
