function Filter(){
	var domUtils = new DOMUtils();

	this.filterByUser = function(tweetlist){
		//Hide whole list
		var elems = document.getElementsByClassName('userclass');
		for(var l = 0; l < elems.length; l++){ elems[l].style.display = 'none'; }

		var selectedUsers = domUtils.getSelectedUsers();
		var selectedTags = domUtils.getSelectedTags();	

		if(selectedUsers.length <=0){ //None of the users are selected, show the whole list
			for(var l = 0; l < elems.length; l++){ elems[l].style.display = 'block'; }
		}
		else{
			for(var i = 0; i < selectedUsers.length; i++){
				tweetlist.show(selectedUsers[i], selectedTags);
			}
		}	
	}
}