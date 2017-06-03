var ClozeCard = function(text,cloze) {

    if (this instanceof ClozeCard) {

        this.cloze = cloze;
        this.partial = findPartial(text,cloze);
        this.fullText = text;

        function findPartial(fullstr,sub) {

            var regex = new RegExp(sub,"i");

            if (fullstr.match(regex)) {

                return fullstr.replace(regex, "...");

            }
            else {

                console.log("Error: Cloze is not in Fulltext");
            }

        }
    
    }
    else {
        return new ClozeCard(text,cloze);
    }
};

module.exports = ClozeCard;