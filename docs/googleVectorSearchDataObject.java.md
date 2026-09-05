# `googleVectorSearchDataObject` Submodule <a name="`googleVectorSearchDataObject` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchDataObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchDataObject <a name="GoogleVectorSearchDataObject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object google_vector_search_data_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObject;

GoogleVectorSearchDataObject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataObjectId(java.lang.String)
    .location(java.lang.String)
//  .data(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVectorSearchDataObjectTimeouts)
//  .vectors(IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.data">data</a></code> | <code>java.lang.String</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.vectors">vectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>></code> | vectors block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.dataObjectId"></a>

- *Type:* java.lang.String

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.data"></a>

- *Type:* java.lang.String

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.Initializer.parameter.vectors"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>>

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors">putVectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors">resetVectors</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts"></a>

```java
public void putTimeouts(GoogleVectorSearchDataObjectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `putVectors` <a name="putVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors"></a>

```java
public void putVectors(IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.putVectors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>>

---

##### `resetData` <a name="resetData" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetData"></a>

```java
public void resetData()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVectors` <a name="resetVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.resetVectors"></a>

```java
public void resetVectors()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObject;

GoogleVectorSearchDataObject.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObject;

GoogleVectorSearchDataObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObject;

GoogleVectorSearchDataObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObject;

GoogleVectorSearchDataObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVectorSearchDataObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVectorSearchDataObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVectorSearchDataObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVectorSearchDataObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchDataObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors">vectors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput">dataObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput">vectorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeouts"></a>

```java
public GoogleVectorSearchDataObjectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference">GoogleVectorSearchDataObjectTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vectors`<sup>Required</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectors"></a>

```java
public GoogleVectorSearchDataObjectVectorsList getVectors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList">GoogleVectorSearchDataObjectVectorsList</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `dataObjectIdInput`<sup>Optional</sup> <a name="dataObjectIdInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectIdInput"></a>

```java
public java.lang.String getDataObjectIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVectorSearchDataObjectTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---

##### `vectorsInput`<sup>Optional</sup> <a name="vectorsInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.vectorsInput"></a>

```java
public IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors> getVectorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.dataObjectId"></a>

```java
public java.lang.String getDataObjectId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchDataObjectConfig <a name="GoogleVectorSearchDataObjectConfig" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectConfig;

GoogleVectorSearchDataObjectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionId(java.lang.String)
    .dataObjectId(java.lang.String)
    .location(java.lang.String)
//  .data(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleVectorSearchDataObjectTimeouts)
//  .vectors(IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId">dataObjectId</a></code> | <code>java.lang.String</code> | ID of the DataObject to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data">data</a></code> | <code>java.lang.String</code> | The JSON data of the DataObject. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | The etag of the DataObject, used for optimistic concurrency control on updates and deletes. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors">vectors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>></code> | vectors block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#collection_id GoogleVectorSearchDataObject#collection_id}

---

##### `dataObjectId`<sup>Required</sup> <a name="dataObjectId" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.dataObjectId"></a>

```java
public java.lang.String getDataObjectId();
```

- *Type:* java.lang.String

ID of the DataObject to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data_object_id GoogleVectorSearchDataObject#data_object_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#location GoogleVectorSearchDataObject#location}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The JSON data of the DataObject.

Must be a JSON object whose field
names match the fields defined in the parent Collection's
'data_schema'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#data GoogleVectorSearchDataObject#data}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#deletion_policy GoogleVectorSearchDataObject#deletion_policy}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

The etag of the DataObject, used for optimistic concurrency control on updates and deletes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#etag GoogleVectorSearchDataObject#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#id GoogleVectorSearchDataObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#project GoogleVectorSearchDataObject#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.timeouts"></a>

```java
public GoogleVectorSearchDataObjectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#timeouts GoogleVectorSearchDataObject#timeouts}

---

##### `vectors`<sup>Optional</sup> <a name="vectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectConfig.property.vectors"></a>

```java
public IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors> getVectors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>>

vectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#vectors GoogleVectorSearchDataObject#vectors}

---

### GoogleVectorSearchDataObjectTimeouts <a name="GoogleVectorSearchDataObjectTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectTimeouts;

GoogleVectorSearchDataObjectTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#create GoogleVectorSearchDataObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#delete GoogleVectorSearchDataObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#update GoogleVectorSearchDataObject#update}.

---

### GoogleVectorSearchDataObjectVectors <a name="GoogleVectorSearchDataObjectVectors" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectors;

GoogleVectorSearchDataObjectVectors.builder()
    .fieldName(java.lang.String)
//  .dense(GoogleVectorSearchDataObjectVectorsDense)
//  .sparse(GoogleVectorSearchDataObjectVectorsSparse)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | dense block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | sparse block. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#field_name GoogleVectorSearchDataObject#field_name}.

---

##### `dense`<sup>Optional</sup> <a name="dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.dense"></a>

```java
public GoogleVectorSearchDataObjectVectorsDense getDense();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

dense block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#dense GoogleVectorSearchDataObject#dense}

---

##### `sparse`<sup>Optional</sup> <a name="sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors.property.sparse"></a>

```java
public GoogleVectorSearchDataObjectVectorsSparse getSparse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

sparse block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#sparse GoogleVectorSearchDataObject#sparse}

---

### GoogleVectorSearchDataObjectVectorsDense <a name="GoogleVectorSearchDataObjectVectorsDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsDense;

GoogleVectorSearchDataObjectVectorsDense.builder()
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | The float values of the dense vector. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

The float values of the dense vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

### GoogleVectorSearchDataObjectVectorsSparse <a name="GoogleVectorSearchDataObjectVectorsSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsSparse;

GoogleVectorSearchDataObjectVectorsSparse.builder()
    .indices(java.util.List<java.lang.Number>)
    .values(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices">indices</a></code> | <code>java.util.List<java.lang.Number></code> | The indices corresponding to the entries in 'values'. Must have the same length as 'values'. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | The non-zero float values of the sparse vector. |

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.indices"></a>

```java
public java.util.List<java.lang.Number> getIndices();
```

- *Type:* java.util.List<java.lang.Number>

The indices corresponding to the entries in 'values'. Must have the same length as 'values'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#indices GoogleVectorSearchDataObject#indices}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

The non-zero float values of the sparse vector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vector_search_data_object#values GoogleVectorSearchDataObject#values}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchDataObjectTimeoutsOutputReference <a name="GoogleVectorSearchDataObjectTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectTimeoutsOutputReference;

new GoogleVectorSearchDataObjectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVectorSearchDataObjectTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectTimeouts">GoogleVectorSearchDataObjectTimeouts</a>

---


### GoogleVectorSearchDataObjectVectorsDenseOutputReference <a name="GoogleVectorSearchDataObjectVectorsDenseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsDenseOutputReference;

new GoogleVectorSearchDataObjectVectorsDenseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference.property.internalValue"></a>

```java
public GoogleVectorSearchDataObjectVectorsDense getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---


### GoogleVectorSearchDataObjectVectorsList <a name="GoogleVectorSearchDataObjectVectorsList" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsList;

new GoogleVectorSearchDataObjectVectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get"></a>

```java
public GoogleVectorSearchDataObjectVectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVectorSearchDataObjectVectors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>>

---


### GoogleVectorSearchDataObjectVectorsOutputReference <a name="GoogleVectorSearchDataObjectVectorsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsOutputReference;

new GoogleVectorSearchDataObjectVectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense">putDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse">putSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense">resetDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse">resetSparse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDense` <a name="putDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense"></a>

```java
public void putDense(GoogleVectorSearchDataObjectVectorsDense value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putDense.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `putSparse` <a name="putSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse"></a>

```java
public void putSparse(GoogleVectorSearchDataObjectVectorsSparse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.putSparse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `resetDense` <a name="resetDense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetDense"></a>

```java
public void resetDense()
```

##### `resetSparse` <a name="resetSparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.resetSparse"></a>

```java
public void resetSparse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense">dense</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse">sparse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput">denseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput">sparseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName">fieldName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dense`<sup>Required</sup> <a name="dense" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.dense"></a>

```java
public GoogleVectorSearchDataObjectVectorsDenseOutputReference getDense();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDenseOutputReference">GoogleVectorSearchDataObjectVectorsDenseOutputReference</a>

---

##### `sparse`<sup>Required</sup> <a name="sparse" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparse"></a>

```java
public GoogleVectorSearchDataObjectVectorsSparseOutputReference getSparse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference">GoogleVectorSearchDataObjectVectorsSparseOutputReference</a>

---

##### `denseInput`<sup>Optional</sup> <a name="denseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.denseInput"></a>

```java
public GoogleVectorSearchDataObjectVectorsDense getDenseInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsDense">GoogleVectorSearchDataObjectVectorsDense</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldNameInput"></a>

```java
public java.lang.String getFieldNameInput();
```

- *Type:* java.lang.String

---

##### `sparseInput`<sup>Optional</sup> <a name="sparseInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.sparseInput"></a>

```java
public GoogleVectorSearchDataObjectVectorsSparse getSparseInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.fieldName"></a>

```java
public java.lang.String getFieldName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVectorSearchDataObjectVectors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectors">GoogleVectorSearchDataObjectVectors</a>

---


### GoogleVectorSearchDataObjectVectorsSparseOutputReference <a name="GoogleVectorSearchDataObjectVectorsSparseOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vector_search_data_object.GoogleVectorSearchDataObjectVectorsSparseOutputReference;

new GoogleVectorSearchDataObjectVectorsSparseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput">indicesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices">indices</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indicesInput`<sup>Optional</sup> <a name="indicesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indicesInput"></a>

```java
public java.util.List<java.lang.Number> getIndicesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.Number> getValuesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `indices`<sup>Required</sup> <a name="indices" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.indices"></a>

```java
public java.util.List<java.lang.Number> getIndices();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.values"></a>

```java
public java.util.List<java.lang.Number> getValues();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparseOutputReference.property.internalValue"></a>

```java
public GoogleVectorSearchDataObjectVectorsSparse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchDataObject.GoogleVectorSearchDataObjectVectorsSparse">GoogleVectorSearchDataObjectVectorsSparse</a>

---



