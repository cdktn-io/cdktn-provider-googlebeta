# `googleSecretManagerRegionalSecretManagedRotation` Submodule <a name="`googleSecretManagerRegionalSecretManagedRotation` Submodule" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecretManagerRegionalSecretManagedRotation <a name="GoogleSecretManagerRegionalSecretManagedRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation google_secret_manager_regional_secret_managed_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotation;

GoogleSecretManagerRegionalSecretManagedRotation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudSqlSingleUserCredentials(GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleSecretManagerRegionalSecretManagedRotationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.cloudSqlSingleUserCredentials"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials GoogleSecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#location GoogleSecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#secret_id GoogleSecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#timeouts GoogleSecretManagerRegionalSecretManagedRotation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials">putCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudSqlSingleUserCredentials` <a name="putCloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials"></a>

```java
public void putCloudSqlSingleUserCredentials(GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putCloudSqlSingleUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts"></a>

```java
public void putTimeouts(GoogleSecretManagerRegionalSecretManagedRotationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotation;

GoogleSecretManagerRegionalSecretManagedRotation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotation;

GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotation;

GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotation;

GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSecretManagerRegionalSecretManagedRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecretManagerRegionalSecretManagedRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecretManagerRegionalSecretManagedRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecretManagerRegionalSecretManagedRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation">rotation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput">cloudSqlSingleUserCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentials"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference getCloudSqlSingleUserCredentials();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference</a>

---

##### `rotation`<sup>Required</sup> <a name="rotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.rotation"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationList getRotation();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList">GoogleSecretManagerRegionalSecretManagedRotationRotationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeouts"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference">GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference</a>

---

##### `cloudSqlSingleUserCredentialsInput`<sup>Optional</sup> <a name="cloudSqlSingleUserCredentialsInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.cloudSqlSingleUserCredentialsInput"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getCloudSqlSingleUserCredentialsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSecretManagerRegionalSecretManagedRotationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials;

GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.builder()
    .instanceId(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .passwordWo(java.lang.String)
//  .passwordWoVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The name of the Cloud SQL instance. The instance must be in the same project as the regional secret. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username">username</a></code> | <code>java.lang.String</code> | The username of the Cloud SQL database user. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password">password</a></code> | <code>java.lang.String</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | The initial password to set for the database user. If not provided, a random password will be generated. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'password_wo' write-only. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The name of the Cloud SQL instance. The instance must be in the same project as the regional secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#instance_id GoogleSecretManagerRegionalSecretManagedRotation#instance_id}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username of the Cloud SQL database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#username GoogleSecretManagerRegionalSecretManagedRotation#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password GoogleSecretManagerRegionalSecretManagedRotation#password}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWo"></a>

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

The initial password to set for the database user. If not provided, a random password will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo GoogleSecretManagerRegionalSecretManagedRotation#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials.property.passwordWoVersion"></a>

```java
public java.lang.String getPasswordWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#password_wo_version GoogleSecretManagerRegionalSecretManagedRotation#password_wo_version}

---

### GoogleSecretManagerRegionalSecretManagedRotationConfig <a name="GoogleSecretManagerRegionalSecretManagedRotationConfig" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationConfig;

GoogleSecretManagerRegionalSecretManagedRotationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudSqlSingleUserCredentials(GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials)
    .location(java.lang.String)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleSecretManagerRegionalSecretManagedRotationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials">cloudSqlSingleUserCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | cloud_sql_single_user_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudSqlSingleUserCredentials`<sup>Required</sup> <a name="cloudSqlSingleUserCredentials" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.cloudSqlSingleUserCredentials"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getCloudSqlSingleUserCredentials();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

cloud_sql_single_user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#cloud_sql_single_user_credentials GoogleSecretManagerRegionalSecretManagedRotation#cloud_sql_single_user_credentials}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#location GoogleSecretManagerRegionalSecretManagedRotation#location}

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The ID of the regional secret of type 'CLOUD_SQL_DB_CREDENTIALS' to enable managed rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#secret_id GoogleSecretManagerRegionalSecretManagedRotation#secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#id GoogleSecretManagerRegionalSecretManagedRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#project GoogleSecretManagerRegionalSecretManagedRotation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationConfig.property.timeouts"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#timeouts GoogleSecretManagerRegionalSecretManagedRotation#timeouts}

---

### GoogleSecretManagerRegionalSecretManagedRotationRotation <a name="GoogleSecretManagerRegionalSecretManagedRotationRotation" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotation;

GoogleSecretManagerRegionalSecretManagedRotationRotation.builder()
    .build();
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus;

GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus.builder()
    .build();
```


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError;

GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError.builder()
    .build();
```


### GoogleSecretManagerRegionalSecretManagedRotationTimeouts <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeouts" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts;

GoogleSecretManagerRegionalSecretManagedRotationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#create GoogleSecretManagerRegionalSecretManagedRotation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_secret_manager_regional_secret_managed_rotation#delete GoogleSecretManagerRegionalSecretManagedRotation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference;

new GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWo"></a>

```java
public void resetPasswordWo()
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.resetPasswordWoVersion"></a>

```java
public void resetPasswordWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput">passwordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo">passwordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoInput"></a>

```java
public java.lang.String getPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersionInput"></a>

```java
public java.lang.String getPasswordWoVersionInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### ~~`passwordWo`~~<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getPasswordWo();
```

- *Type:* java.lang.String

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.passwordWoVersion"></a>

```java
public java.lang.String getPasswordWoVersion();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentialsOutputReference.property.internalValue"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials">GoogleSecretManagerRegionalSecretManagedRotationCloudSqlSingleUserCredentials</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList;

new GoogleSecretManagerRegionalSecretManagedRotationRotationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList;

new GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference;

new GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorOutputReference.property.internalValue"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusError</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList;

new GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference;

new GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.error"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusErrorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusOutputReference.property.internalValue"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatus</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference;

new GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus">managedRotationStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedRotationStatus`<sup>Required</sup> <a name="managedRotationStatus" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.managedRotationStatus"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList getManagedRotationStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList">GoogleSecretManagerRegionalSecretManagedRotationRotationManagedRotationStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotationOutputReference.property.internalValue"></a>

```java
public GoogleSecretManagerRegionalSecretManagedRotationRotation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationRotation">GoogleSecretManagerRegionalSecretManagedRotationRotation</a>

---


### GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference <a name="GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secret_manager_regional_secret_managed_rotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference;

new GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSecretManagerRegionalSecretManagedRotationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecretManagerRegionalSecretManagedRotation.GoogleSecretManagerRegionalSecretManagedRotationTimeouts">GoogleSecretManagerRegionalSecretManagedRotationTimeouts</a>

---



