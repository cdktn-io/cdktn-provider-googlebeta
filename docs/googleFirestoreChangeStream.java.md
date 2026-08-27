# `googleFirestoreChangeStream` Submodule <a name="`googleFirestoreChangeStream` Submodule" id="@cdktn/provider-google-beta.googleFirestoreChangeStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreChangeStream <a name="GoogleFirestoreChangeStream" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream google_firestore_change_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStream;

GoogleFirestoreChangeStream.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .retentionPeriod(java.lang.String)
//  .collectionGroupScope(GoogleFirestoreChangeStreamCollectionGroupScope)
//  .database(java.lang.String)
//  .databaseScope(GoogleFirestoreChangeStreamDatabaseScope)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreChangeStreamTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.String</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.retentionPeriod"></a>

- *Type:* java.lang.String

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `collectionGroupScope`<sup>Optional</sup> <a name="collectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.collectionGroupScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `databaseScope`<sup>Optional</sup> <a name="databaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.databaseScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope">putCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope">putDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope">resetCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope">resetDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectionGroupScope` <a name="putCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope"></a>

```java
public void putCollectionGroupScope(GoogleFirestoreChangeStreamCollectionGroupScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putCollectionGroupScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `putDatabaseScope` <a name="putDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope"></a>

```java
public void putDatabaseScope(GoogleFirestoreChangeStreamDatabaseScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putDatabaseScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirestoreChangeStreamTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `resetCollectionGroupScope` <a name="resetCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetCollectionGroupScope"></a>

```java
public void resetCollectionGroupScope()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetDatabaseScope` <a name="resetDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDatabaseScope"></a>

```java
public void resetDatabaseScope()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStream;

GoogleFirestoreChangeStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStream;

GoogleFirestoreChangeStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStream;

GoogleFirestoreChangeStream.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStream;

GoogleFirestoreChangeStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirestoreChangeStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirestoreChangeStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirestoreChangeStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirestoreChangeStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreChangeStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput">collectionGroupScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput">databaseScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionGroupScope`<sup>Required</sup> <a name="collectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScope"></a>

```java
public GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference getCollectionGroupScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference">GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `databaseScope`<sup>Required</sup> <a name="databaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScope"></a>

```java
public GoogleFirestoreChangeStreamDatabaseScopeOutputReference getDatabaseScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference">GoogleFirestoreChangeStreamDatabaseScopeOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeouts"></a>

```java
public GoogleFirestoreChangeStreamTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference">GoogleFirestoreChangeStreamTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `collectionGroupScopeInput`<sup>Optional</sup> <a name="collectionGroupScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.collectionGroupScopeInput"></a>

```java
public GoogleFirestoreChangeStreamCollectionGroupScope getCollectionGroupScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `databaseScopeInput`<sup>Optional</sup> <a name="databaseScopeInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.databaseScopeInput"></a>

```java
public GoogleFirestoreChangeStreamDatabaseScope getDatabaseScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriodInput"></a>

```java
public java.lang.String getRetentionPeriodInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirestoreChangeStreamTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.retentionPeriod"></a>

```java
public java.lang.String getRetentionPeriod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreChangeStreamCollectionGroupScope <a name="GoogleFirestoreChangeStreamCollectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamCollectionGroupScope;

GoogleFirestoreChangeStreamCollectionGroupScope.builder()
    .collectionGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId">collectionGroupId</a></code> | <code>java.lang.String</code> | The ID of the collection group to track. |

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope.property.collectionGroupId"></a>

```java
public java.lang.String getCollectionGroupId();
```

- *Type:* java.lang.String

The ID of the collection group to track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#collection_group_id GoogleFirestoreChangeStream#collection_group_id}

---

### GoogleFirestoreChangeStreamConfig <a name="GoogleFirestoreChangeStreamConfig" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamConfig;

GoogleFirestoreChangeStreamConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .retentionPeriod(java.lang.String)
//  .collectionGroupScope(GoogleFirestoreChangeStreamCollectionGroupScope)
//  .database(java.lang.String)
//  .databaseScope(GoogleFirestoreChangeStreamDatabaseScope)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirestoreChangeStreamTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID to use for the change stream, which will become the final component of the change stream's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.String</code> | The duration for which change stream data is retained. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope">collectionGroupScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | collection_group_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database">database</a></code> | <code>java.lang.String</code> | The Firestore database ID. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope">databaseScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | database_scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID to use for the change stream, which will become the final component of the change stream's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#name GoogleFirestoreChangeStream#name}

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.retentionPeriod"></a>

```java
public java.lang.String getRetentionPeriod();
```

- *Type:* java.lang.String

The duration for which change stream data is retained.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "86400s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#retention_period GoogleFirestoreChangeStream#retention_period}

---

##### `collectionGroupScope`<sup>Optional</sup> <a name="collectionGroupScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.collectionGroupScope"></a>

```java
public GoogleFirestoreChangeStreamCollectionGroupScope getCollectionGroupScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

collection_group_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#collection_group_scope GoogleFirestoreChangeStream#collection_group_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The Firestore database ID. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#database GoogleFirestoreChangeStream#database}

---

##### `databaseScope`<sup>Optional</sup> <a name="databaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.databaseScope"></a>

```java
public GoogleFirestoreChangeStreamDatabaseScope getDatabaseScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

database_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#database_scope GoogleFirestoreChangeStream#database_scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#deletion_policy GoogleFirestoreChangeStream#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#id GoogleFirestoreChangeStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#project GoogleFirestoreChangeStream#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamConfig.property.timeouts"></a>

```java
public GoogleFirestoreChangeStreamTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#timeouts GoogleFirestoreChangeStream#timeouts}

---

### GoogleFirestoreChangeStreamDatabaseScope <a name="GoogleFirestoreChangeStreamDatabaseScope" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamDatabaseScope;

GoogleFirestoreChangeStreamDatabaseScope.builder()
    .build();
```


### GoogleFirestoreChangeStreamTimeouts <a name="GoogleFirestoreChangeStreamTimeouts" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamTimeouts;

GoogleFirestoreChangeStreamTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#create GoogleFirestoreChangeStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#delete GoogleFirestoreChangeStream#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_firestore_change_stream#update GoogleFirestoreChangeStream#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference <a name="GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference;

new GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput">collectionGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId">collectionGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionGroupIdInput`<sup>Optional</sup> <a name="collectionGroupIdInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupIdInput"></a>

```java
public java.lang.String getCollectionGroupIdInput();
```

- *Type:* java.lang.String

---

##### `collectionGroupId`<sup>Required</sup> <a name="collectionGroupId" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.collectionGroupId"></a>

```java
public java.lang.String getCollectionGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScopeOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreChangeStreamCollectionGroupScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamCollectionGroupScope">GoogleFirestoreChangeStreamCollectionGroupScope</a>

---


### GoogleFirestoreChangeStreamDatabaseScopeOutputReference <a name="GoogleFirestoreChangeStreamDatabaseScopeOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference;

new GoogleFirestoreChangeStreamDatabaseScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScopeOutputReference.property.internalValue"></a>

```java
public GoogleFirestoreChangeStreamDatabaseScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamDatabaseScope">GoogleFirestoreChangeStreamDatabaseScope</a>

---


### GoogleFirestoreChangeStreamTimeoutsOutputReference <a name="GoogleFirestoreChangeStreamTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firestore_change_stream.GoogleFirestoreChangeStreamTimeoutsOutputReference;

new GoogleFirestoreChangeStreamTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirestoreChangeStreamTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreChangeStream.GoogleFirestoreChangeStreamTimeouts">GoogleFirestoreChangeStreamTimeouts</a>

---



