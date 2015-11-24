# HideWhen.js
Shows and hides elements based on a checkbox selection with initial values.

## Usage

Add resource to page
````
	<xp:this.resources>
		<xp:script src="/HideWhen.js" clientSide="true"></xp:script>
	</xp:this.resources>
````

Important is to wait until the document tree has been built. 
````
  <xp:scriptBlock id="scriptBlock1">
    <xp:this.value><![CDATA[
    $(function(){
  	  $(".full-time-hide").hideWhenToggler({togglerId: "#{id:checkBox1}", hideWhenChecked: true});
  	  $(".full-time-show").hideWhenToggler({togglerId: "#{id:checkBox1}", hideWhenChecked: false});
    })
    ]]></xp:this.value>
  </xp:scriptBlock>
````

