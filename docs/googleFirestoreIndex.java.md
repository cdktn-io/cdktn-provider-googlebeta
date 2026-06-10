# `googleFirestoreIndex` Submodule <a name="`googleFirestoreIndex` Submodule" id="@cdktn/provider-google-beta.googleFirestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreIndex <a name="GoogleFirestoreIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndex;

GoogleFirestoreIndex.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collection(java.lang.String)
    .fields(IResolvable|java.util.List<GoogleFirestoreIndexFields>)
//  .apiScope(java.lang.String)
//  .database(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .density(java.lang.String)
//  .id(java.lang.String)
//  .multikey(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .queryScope(java.lang.String)
//  .skipWait(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleFirestoreIndexTimeouts)
//  .unique(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.collection">collection</a></code> | <code>java.lang.String</code> | The collection being indexed. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>></code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.apiScope">apiScope</a></code> | <code>java.lang.String</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.density">density</a></code> | <code>java.lang.String</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.multikey">multikey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.queryScope">queryScope</a></code> | <code>java.lang.String</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.skipWait">skipWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to skip waiting for the index to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.unique">unique</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.collection"></a>

- *Type:* java.lang.String

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.fields"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}

---

##### `apiScope`<sup>Optional</sup> <a name="apiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.apiScope"></a>

- *Type:* java.lang.String

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#deletion_policy GoogleFirestoreIndex#deletion_policy}

---

##### `density`<sup>Optional</sup> <a name="density" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.density"></a>

- *Type:* java.lang.String

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#density GoogleFirestoreIndex#density}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multikey`<sup>Optional</sup> <a name="multikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.multikey"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#multikey GoogleFirestoreIndex#multikey}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}.

---

##### `queryScope`<sup>Optional</sup> <a name="queryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.queryScope"></a>

- *Type:* java.lang.String

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}

---

##### `skipWait`<sup>Optional</sup> <a name="skipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.skipWait"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to skip waiting for the index to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#skip_wait GoogleFirestoreIndex#skip_wait}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.unique"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#unique GoogleFirestoreIndex#unique}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope">resetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDensity">resetDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetMultikey">resetMultikey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope">resetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetSkipWait">resetSkipWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<GoogleFirestoreIndexFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirestoreIndexTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `resetApiScope` <a name="resetApiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope"></a>

```java
public void resetApiScope()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDensity` <a name="resetDensity" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDensity"></a>

```java
public void resetDensity()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId"></a>

```java
public void resetId()
```

##### `resetMultikey` <a name="resetMultikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetMultikey"></a>

```java
public void resetMultikey()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject"></a>

```java
public void resetProject()
```

##### `resetQueryScope` <a name="resetQueryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope"></a>

```java
public void resetQueryScope()
```

##### `resetSkipWait` <a name="resetSkipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetSkipWait"></a>

```java
public void resetSkipWait()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnique` <a name="resetUnique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetUnique"></a>

```java
public void resetUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirestoreIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndex;

GoogleFirestoreIndex.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndex;

GoogleFirestoreIndex.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndex;

GoogleFirestoreIndex.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndex;

GoogleFirestoreIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirestoreIndex.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirestoreIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirestoreIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput">apiScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput">collectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.densityInput">densityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikeyInput">multikeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput">queryScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWaitInput">skipWaitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.uniqueInput">uniqueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope">apiScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection">collection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.density">density</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikey">multikey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope">queryScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWait">skipWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.unique">unique</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields"></a>

```java
public GoogleFirestoreIndexFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts"></a>

```java
public GoogleFirestoreIndexTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a>

---

##### `apiScopeInput`<sup>Optional</sup> <a name="apiScopeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput"></a>

```java
public java.lang.String getApiScopeInput();
```

- *Type:* java.lang.String

---

##### `collectionInput`<sup>Optional</sup> <a name="collectionInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput"></a>

```java
public java.lang.String getCollectionInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `densityInput`<sup>Optional</sup> <a name="densityInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.densityInput"></a>

```java
public java.lang.String getDensityInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `multikeyInput`<sup>Optional</sup> <a name="multikeyInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikeyInput"></a>

```java
public java.lang.Boolean|IResolvable getMultikeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `queryScopeInput`<sup>Optional</sup> <a name="queryScopeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput"></a>

```java
public java.lang.String getQueryScopeInput();
```

- *Type:* java.lang.String

---

##### `skipWaitInput`<sup>Optional</sup> <a name="skipWaitInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWaitInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipWaitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirestoreIndexTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.uniqueInput"></a>

```java
public java.lang.Boolean|IResolvable getUniqueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiScope`<sup>Required</sup> <a name="apiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope"></a>

```java
public java.lang.String getApiScope();
```

- *Type:* java.lang.String

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `density`<sup>Required</sup> <a name="density" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.density"></a>

```java
public java.lang.String getDensity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multikey`<sup>Required</sup> <a name="multikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikey"></a>

```java
public java.lang.Boolean|IResolvable getMultikey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `queryScope`<sup>Required</sup> <a name="queryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope"></a>

```java
public java.lang.String getQueryScope();
```

- *Type:* java.lang.String

---

##### `skipWait`<sup>Required</sup> <a name="skipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWait"></a>

```java
public java.lang.Boolean|IResolvable getSkipWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.unique"></a>

```java
public java.lang.Boolean|IResolvable getUnique();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreIndexConfig <a name="GoogleFirestoreIndexConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexConfig;

GoogleFirestoreIndexConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collection(java.lang.String)
    .fields(IResolvable|java.util.List<GoogleFirestoreIndexFields>)
//  .apiScope(java.lang.String)
//  .database(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .density(java.lang.String)
//  .id(java.lang.String)
//  .multikey(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .queryScope(java.lang.String)
//  .skipWait(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleFirestoreIndexTimeouts)
//  .unique(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection">collection</a></code> | <code>java.lang.String</code> | The collection being indexed. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>></code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope">apiScope</a></code> | <code>java.lang.String</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database">database</a></code> | <code>java.lang.String</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.density">density</a></code> | <code>java.lang.String</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.multikey">multikey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope">queryScope</a></code> | <code>java.lang.String</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.skipWait">skipWait</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to skip waiting for the index to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.unique">unique</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection"></a>

```java
public java.lang.String getCollection();
```

- *Type:* java.lang.String

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>>

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}

---

##### `apiScope`<sup>Optional</sup> <a name="apiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope"></a>

```java
public java.lang.String getApiScope();
```

- *Type:* java.lang.String

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#deletion_policy GoogleFirestoreIndex#deletion_policy}

---

##### `density`<sup>Optional</sup> <a name="density" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.density"></a>

```java
public java.lang.String getDensity();
```

- *Type:* java.lang.String

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#density GoogleFirestoreIndex#density}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multikey`<sup>Optional</sup> <a name="multikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.multikey"></a>

```java
public java.lang.Boolean|IResolvable getMultikey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#multikey GoogleFirestoreIndex#multikey}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}.

---

##### `queryScope`<sup>Optional</sup> <a name="queryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope"></a>

```java
public java.lang.String getQueryScope();
```

- *Type:* java.lang.String

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}

---

##### `skipWait`<sup>Optional</sup> <a name="skipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.skipWait"></a>

```java
public java.lang.Boolean|IResolvable getSkipWait();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to skip waiting for the index to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#skip_wait GoogleFirestoreIndex#skip_wait}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts"></a>

```java
public GoogleFirestoreIndexTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.unique"></a>

```java
public java.lang.Boolean|IResolvable getUnique();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#unique GoogleFirestoreIndex#unique}

---

### GoogleFirestoreIndexFields <a name="GoogleFirestoreIndexFields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFields;

GoogleFirestoreIndexFields.builder()
//  .arrayConfig(java.lang.String)
//  .fieldPath(java.lang.String)
//  .order(java.lang.String)
//  .searchConfig(GoogleFirestoreIndexFieldsSearchConfig)
//  .vectorConfig(GoogleFirestoreIndexFieldsVectorConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig">arrayConfig</a></code> | <code>java.lang.String</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order">order</a></code> | <code>java.lang.String</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.searchConfig">searchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | search_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `arrayConfig`<sup>Optional</sup> <a name="arrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig"></a>

```java
public java.lang.String getArrayConfig();
```

- *Type:* java.lang.String

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', 'searchConfig' and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#array_config GoogleFirestoreIndex#array_config}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#field_path GoogleFirestoreIndex#field_path}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', 'searchConfig' and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#order GoogleFirestoreIndex#order}

---

##### `searchConfig`<sup>Optional</sup> <a name="searchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.searchConfig"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfig getSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#search_config GoogleFirestoreIndex#search_config}

---

##### `vectorConfig`<sup>Optional</sup> <a name="vectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfig getVectorConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#vector_config GoogleFirestoreIndex#vector_config}

---

### GoogleFirestoreIndexFieldsSearchConfig <a name="GoogleFirestoreIndexFieldsSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfig;

GoogleFirestoreIndexFieldsSearchConfig.builder()
//  .geoSpec(GoogleFirestoreIndexFieldsSearchConfigGeoSpec)
//  .textSpec(GoogleFirestoreIndexFieldsSearchConfigTextSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.geoSpec">geoSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | geo_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.textSpec">textSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | text_spec block. |

---

##### `geoSpec`<sup>Optional</sup> <a name="geoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.geoSpec"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec getGeoSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

geo_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#geo_spec GoogleFirestoreIndex#geo_spec}

---

##### `textSpec`<sup>Optional</sup> <a name="textSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.textSpec"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpec getTextSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

text_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#text_spec GoogleFirestoreIndex#text_spec}

---

### GoogleFirestoreIndexFieldsSearchConfigGeoSpec <a name="GoogleFirestoreIndexFieldsSearchConfigGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigGeoSpec;

GoogleFirestoreIndexFieldsSearchConfigGeoSpec.builder()
    .geoJsonIndexingDisabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled">geoJsonIndexingDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, disables GeoJSON indexing for the field. |

---

##### `geoJsonIndexingDisabled`<sup>Required</sup> <a name="geoJsonIndexingDisabled" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoJsonIndexingDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, disables GeoJSON indexing for the field.

By default, GeoJSON points are indexed.
Firestore GeoPoints are indexed regardless of the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#geo_json_indexing_disabled GoogleFirestoreIndex#geo_json_indexing_disabled}

---

### GoogleFirestoreIndexFieldsSearchConfigTextSpec <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigTextSpec;

GoogleFirestoreIndexFieldsSearchConfigTextSpec.builder()
    .indexSpecs(IResolvable|java.util.List<GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs">indexSpecs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>></code> | index_specs block. |

---

##### `indexSpecs`<sup>Required</sup> <a name="indexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs> getIndexSpecs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>>

index_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#index_specs GoogleFirestoreIndex#index_specs}

---

### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs;

GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.builder()
//  .indexType(java.lang.String)
//  .matchType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType">indexType</a></code> | <code>java.lang.String</code> | Ways to index the text field value. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType">matchType</a></code> | <code>java.lang.String</code> | How to match the text field value. |

---

##### `indexType`<sup>Optional</sup> <a name="indexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType"></a>

```java
public java.lang.String getIndexType();
```

- *Type:* java.lang.String

Ways to index the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#index_type GoogleFirestoreIndex#index_type}

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

How to match the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#match_type GoogleFirestoreIndex#match_type}

---

### GoogleFirestoreIndexFieldsVectorConfig <a name="GoogleFirestoreIndexFieldsVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsVectorConfig;

GoogleFirestoreIndexFieldsVectorConfig.builder()
//  .dimension(java.lang.Number)
//  .flat(GoogleFirestoreIndexFieldsVectorConfigFlat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#dimension GoogleFirestoreIndex#dimension}

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfigFlat getFlat();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#flat GoogleFirestoreIndex#flat}

---

### GoogleFirestoreIndexFieldsVectorConfigFlat <a name="GoogleFirestoreIndexFieldsVectorConfigFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsVectorConfigFlat;

GoogleFirestoreIndexFieldsVectorConfigFlat.builder()
    .build();
```


### GoogleFirestoreIndexTimeouts <a name="GoogleFirestoreIndexTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexTimeouts;

GoogleFirestoreIndexTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#update GoogleFirestoreIndex#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firestore_index#update GoogleFirestoreIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreIndexFieldsList <a name="GoogleFirestoreIndexFieldsList" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsList;

new GoogleFirestoreIndexFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get"></a>

```java
public GoogleFirestoreIndexFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>>

---


### GoogleFirestoreIndexFieldsOutputReference <a name="GoogleFirestoreIndexFieldsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsOutputReference;

new GoogleFirestoreIndexFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig">putSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig">putVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig">resetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetSearchConfig">resetSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig">resetVectorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSearchConfig` <a name="putSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig"></a>

```java
public void putSearchConfig(GoogleFirestoreIndexFieldsSearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---

##### `putVectorConfig` <a name="putVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```java
public void putVectorConfig(GoogleFirestoreIndexFieldsVectorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `resetArrayConfig` <a name="resetArrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```java
public void resetArrayConfig()
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetSearchConfig` <a name="resetSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetSearchConfig"></a>

```java
public void resetSearchConfig()
```

##### `resetVectorConfig` <a name="resetVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```java
public void resetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfig">searchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference">GoogleFirestoreIndexFieldsSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig">vectorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput">arrayConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfigInput">searchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput">vectorConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig">arrayConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `searchConfig`<sup>Required</sup> <a name="searchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfig"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigOutputReference getSearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference">GoogleFirestoreIndexFieldsSearchConfigOutputReference</a>

---

##### `vectorConfig`<sup>Required</sup> <a name="vectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfigOutputReference getVectorConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `arrayConfigInput`<sup>Optional</sup> <a name="arrayConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```java
public java.lang.String getArrayConfigInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `searchConfigInput`<sup>Optional</sup> <a name="searchConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfigInput"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfig getSearchConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---

##### `vectorConfigInput`<sup>Optional</sup> <a name="vectorConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfig getVectorConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `arrayConfig`<sup>Required</sup> <a name="arrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```java
public java.lang.String getArrayConfig();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirestoreIndexFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>

---


### GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference;

new GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput">geoJsonIndexingDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled">geoJsonIndexingDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `geoJsonIndexingDisabledInput`<sup>Optional</sup> <a name="geoJsonIndexingDisabledInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGeoJsonIndexingDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `geoJsonIndexingDisabled`<sup>Required</sup> <a name="geoJsonIndexingDisabled" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled"></a>

```java
public java.lang.Boolean|IResolvable getGeoJsonIndexingDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---


### GoogleFirestoreIndexFieldsSearchConfigOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigOutputReference;

new GoogleFirestoreIndexFieldsSearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec">putGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec">putTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec">resetGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec">resetTextSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeoSpec` <a name="putGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec"></a>

```java
public void putGeoSpec(GoogleFirestoreIndexFieldsSearchConfigGeoSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `putTextSpec` <a name="putTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec"></a>

```java
public void putTextSpec(GoogleFirestoreIndexFieldsSearchConfigTextSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `resetGeoSpec` <a name="resetGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec"></a>

```java
public void resetGeoSpec()
```

##### `resetTextSpec` <a name="resetTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec"></a>

```java
public void resetTextSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec">geoSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpec">textSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput">geoSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput">textSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `geoSpec`<sup>Required</sup> <a name="geoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference getGeoSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a>

---

##### `textSpec`<sup>Required</sup> <a name="textSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpec"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference getTextSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference</a>

---

##### `geoSpecInput`<sup>Optional</sup> <a name="geoSpecInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec getGeoSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `textSpecInput`<sup>Optional</sup> <a name="textSpecInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpec getTextSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>>

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType">resetIndexType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIndexType` <a name="resetIndexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType"></a>

```java
public void resetIndexType()
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType"></a>

```java
public void resetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput">indexTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType">indexType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexTypeInput`<sup>Optional</sup> <a name="indexTypeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput"></a>

```java
public java.lang.String getIndexTypeInput();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType"></a>

```java
public java.lang.String getIndexType();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs">putIndexSpecs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIndexSpecs` <a name="putIndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs"></a>

```java
public void putIndexSpecs(IResolvable|java.util.List<GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs">indexSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput">indexSpecsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `indexSpecs`<sup>Required</sup> <a name="indexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList getIndexSpecs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a>

---

##### `indexSpecsInput`<sup>Optional</sup> <a name="indexSpecsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput"></a>

```java
public IResolvable|java.util.List<GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs> getIndexSpecsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreIndexFieldsSearchConfigTextSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---


### GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference;

new GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfigFlat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---


### GoogleFirestoreIndexFieldsVectorConfigOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexFieldsVectorConfigOutputReference;

new GoogleFirestoreIndexFieldsVectorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat">putFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat">resetFlat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlat` <a name="putFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```java
public void putFlat(GoogleFirestoreIndexFieldsVectorConfigFlat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `resetDimension` <a name="resetDimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetFlat` <a name="resetFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```java
public void resetFlat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">dimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">flatInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension">dimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference getFlat();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```java
public java.lang.Number getDimensionInput();
```

- *Type:* java.lang.Number

---

##### `flatInput`<sup>Optional</sup> <a name="flatInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfigFlat getFlatInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```java
public java.lang.Number getDimension();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreIndexFieldsVectorConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---


### GoogleFirestoreIndexTimeoutsOutputReference <a name="GoogleFirestoreIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_index.GoogleFirestoreIndexTimeoutsOutputReference;

new GoogleFirestoreIndexTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirestoreIndexTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---



