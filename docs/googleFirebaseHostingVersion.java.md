# `googleFirebaseHostingVersion` Submodule <a name="`googleFirebaseHostingVersion` Submodule" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingVersion <a name="GoogleFirebaseHostingVersion" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version google_firebase_hosting_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersion;

GoogleFirebaseHostingVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .siteId(java.lang.String)
//  .config(GoogleFirebaseHostingVersionConfigA)
//  .id(java.lang.String)
//  .timeouts(GoogleFirebaseHostingVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig"></a>

```java
public void putConfig(GoogleFirebaseHostingVersionConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseHostingVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseHostingVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersion;

GoogleFirebaseHostingVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersion;

GoogleFirebaseHostingVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersion;

GoogleFirebaseHostingVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersion;

GoogleFirebaseHostingVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseHostingVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirebaseHostingVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseHostingVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseHostingVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.config"></a>

```java
public GoogleFirebaseHostingVersionConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference">GoogleFirebaseHostingVersionConfigAOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeouts"></a>

```java
public GoogleFirebaseHostingVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference">GoogleFirebaseHostingVersionTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.configInput"></a>

```java
public GoogleFirebaseHostingVersionConfigA getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirebaseHostingVersionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingVersionConfig <a name="GoogleFirebaseHostingVersionConfig" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfig;

GoogleFirebaseHostingVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .siteId(java.lang.String)
//  .config(GoogleFirebaseHostingVersionConfigA)
//  .id(java.lang.String)
//  .timeouts(GoogleFirebaseHostingVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site in which to create this Version. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Required. The ID of the site in which to create this Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#site_id GoogleFirebaseHostingVersion#site_id}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.config"></a>

```java
public GoogleFirebaseHostingVersionConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#config GoogleFirebaseHostingVersion#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#id GoogleFirebaseHostingVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfig.property.timeouts"></a>

```java
public GoogleFirebaseHostingVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#timeouts GoogleFirebaseHostingVersion#timeouts}

---

### GoogleFirebaseHostingVersionConfigA <a name="GoogleFirebaseHostingVersionConfigA" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigA;

GoogleFirebaseHostingVersionConfigA.builder()
//  .headers(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigHeaders>)
//  .redirects(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRedirects>)
//  .rewrites(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRewrites>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.headers">headers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>></code> | headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects">redirects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>></code> | redirects block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites">rewrites</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>></code> | rewrites block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.headers"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigHeaders> getHeaders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}

---

##### `redirects`<sup>Optional</sup> <a name="redirects" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.redirects"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRedirects> getRedirects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>>

redirects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#redirects GoogleFirebaseHostingVersion#redirects}

---

##### `rewrites`<sup>Optional</sup> <a name="rewrites" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA.property.rewrites"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRewrites> getRewrites();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>>

rewrites block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#rewrites GoogleFirebaseHostingVersion#rewrites}

---

### GoogleFirebaseHostingVersionConfigHeaders <a name="GoogleFirebaseHostingVersionConfigHeaders" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigHeaders;

GoogleFirebaseHostingVersionConfigHeaders.builder()
    .headers(java.util.Map<java.lang.String, java.lang.String>)
//  .glob(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The additional headers to add to the response. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.glob">glob</a></code> | <code>java.lang.String</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.regex">regex</a></code> | <code>java.lang.String</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The additional headers to add to the response. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#headers GoogleFirebaseHostingVersion#headers}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRedirects <a name="GoogleFirebaseHostingVersionConfigRedirects" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRedirects;

GoogleFirebaseHostingVersionConfigRedirects.builder()
    .location(java.lang.String)
    .statusCode(java.lang.Number)
//  .glob(java.lang.String)
//  .regex(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location">location</a></code> | <code>java.lang.String</code> | The value to put in the HTTP location header of the response. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | The status HTTP code to return in the response. It must be a valid 3xx status code. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob">glob</a></code> | <code>java.lang.String</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex">regex</a></code> | <code>java.lang.String</code> | The user-supplied RE2 regular expression to match against the request URL path. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The value to put in the HTTP location header of the response.

The location can contain capture group values from the pattern using a : prefix to identify
the segment and an optional * to capture the rest of the URL. For example:

```hcl
redirects {
  glob = "/:capture*"
  status_code = 302
  location = "https://example.com/foo/:capture"
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#location GoogleFirebaseHostingVersion#location}

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

The status HTTP code to return in the response. It must be a valid 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#status_code GoogleFirebaseHostingVersion#status_code}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

### GoogleFirebaseHostingVersionConfigRewrites <a name="GoogleFirebaseHostingVersionConfigRewrites" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRewrites;

GoogleFirebaseHostingVersionConfigRewrites.builder()
//  .function(java.lang.String)
//  .glob(java.lang.String)
//  .path(java.lang.String)
//  .regex(java.lang.String)
//  .run(GoogleFirebaseHostingVersionConfigRewritesRun)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function">function</a></code> | <code>java.lang.String</code> | The function to proxy requests to. Must match the exported function name exactly. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob">glob</a></code> | <code>java.lang.String</code> | The user-supplied glob to match against the request URL path. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path">path</a></code> | <code>java.lang.String</code> | The URL path to rewrite the request to. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex">regex</a></code> | <code>java.lang.String</code> | The user-supplied RE2 regular expression to match against the request URL path. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run">run</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | run block. |

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

The function to proxy requests to. Must match the exported function name exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#function GoogleFirebaseHostingVersion#function}

---

##### `glob`<sup>Optional</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

The user-supplied glob to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#glob GoogleFirebaseHostingVersion#glob}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The URL path to rewrite the request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#path GoogleFirebaseHostingVersion#path}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The user-supplied RE2 regular expression to match against the request URL path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#regex GoogleFirebaseHostingVersion#regex}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites.property.run"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesRun getRun();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#run GoogleFirebaseHostingVersion#run}

---

### GoogleFirebaseHostingVersionConfigRewritesRun <a name="GoogleFirebaseHostingVersionConfigRewritesRun" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRewritesRun;

GoogleFirebaseHostingVersionConfigRewritesRun.builder()
    .serviceId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | User-defined ID of the Cloud Run service. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region">region</a></code> | <code>java.lang.String</code> | Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

User-defined ID of the Cloud Run service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#service_id GoogleFirebaseHostingVersion#service_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Optional. User-provided region where the Cloud Run service is hosted. Defaults to 'us-central1' if not supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#region GoogleFirebaseHostingVersion#region}

---

### GoogleFirebaseHostingVersionTimeouts <a name="GoogleFirebaseHostingVersionTimeouts" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionTimeouts;

GoogleFirebaseHostingVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#create GoogleFirebaseHostingVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_firebase_hosting_version#delete GoogleFirebaseHostingVersion#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingVersionConfigAOutputReference <a name="GoogleFirebaseHostingVersionConfigAOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigAOutputReference;

new GoogleFirebaseHostingVersionConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects">putRedirects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites">putRewrites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects">resetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites">resetRewrites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putHeaders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>>

---

##### `putRedirects` <a name="putRedirects" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects"></a>

```java
public void putRedirects(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRedirects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRedirects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>>

---

##### `putRewrites` <a name="putRewrites" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites"></a>

```java
public void putRewrites(IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRewrites> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.putRewrites.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>>

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetRedirects` <a name="resetRedirects" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRedirects"></a>

```java
public void resetRedirects()
```

##### `resetRewrites` <a name="resetRewrites" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.resetRewrites"></a>

```java
public void resetRewrites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList">GoogleFirebaseHostingVersionConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects">redirects</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headersInput">headersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput">redirectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput">rewritesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headers"></a>

```java
public GoogleFirebaseHostingVersionConfigHeadersList getHeaders();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList">GoogleFirebaseHostingVersionConfigHeadersList</a>

---

##### `redirects`<sup>Required</sup> <a name="redirects" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirects"></a>

```java
public GoogleFirebaseHostingVersionConfigRedirectsList getRedirects();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList">GoogleFirebaseHostingVersionConfigRedirectsList</a>

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewrites"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesList getRewrites();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList">GoogleFirebaseHostingVersionConfigRewritesList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.headersInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigHeaders> getHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>>

---

##### `redirectsInput`<sup>Optional</sup> <a name="redirectsInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.redirectsInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRedirects> getRedirectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>>

---

##### `rewritesInput`<sup>Optional</sup> <a name="rewritesInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.rewritesInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRewrites> getRewritesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigAOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingVersionConfigA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigA">GoogleFirebaseHostingVersionConfigA</a>

---


### GoogleFirebaseHostingVersionConfigHeadersList <a name="GoogleFirebaseHostingVersionConfigHeadersList" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigHeadersList;

new GoogleFirebaseHostingVersionConfigHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get"></a>

```java
public GoogleFirebaseHostingVersionConfigHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigHeaders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>>

---


### GoogleFirebaseHostingVersionConfigHeadersOutputReference <a name="GoogleFirebaseHostingVersionConfigHeadersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigHeadersOutputReference;

new GoogleFirebaseHostingVersionConfigHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlob` <a name="resetGlob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetGlob"></a>

```java
public void resetGlob()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.globInput">globInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.glob">glob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.globInput"></a>

```java
public java.lang.String getGlobInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseHostingVersionConfigHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigHeaders">GoogleFirebaseHostingVersionConfigHeaders</a>

---


### GoogleFirebaseHostingVersionConfigRedirectsList <a name="GoogleFirebaseHostingVersionConfigRedirectsList" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRedirectsList;

new GoogleFirebaseHostingVersionConfigRedirectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get"></a>

```java
public GoogleFirebaseHostingVersionConfigRedirectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRedirects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>>

---


### GoogleFirebaseHostingVersionConfigRedirectsOutputReference <a name="GoogleFirebaseHostingVersionConfigRedirectsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRedirectsOutputReference;

new GoogleFirebaseHostingVersionConfigRedirectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlob` <a name="resetGlob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetGlob"></a>

```java
public void resetGlob()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput">globInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob">glob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.globInput"></a>

```java
public java.lang.String getGlobInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirectsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseHostingVersionConfigRedirects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRedirects">GoogleFirebaseHostingVersionConfigRedirects</a>

---


### GoogleFirebaseHostingVersionConfigRewritesList <a name="GoogleFirebaseHostingVersionConfigRewritesList" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRewritesList;

new GoogleFirebaseHostingVersionConfigRewritesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseHostingVersionConfigRewrites> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>>

---


### GoogleFirebaseHostingVersionConfigRewritesOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRewritesOutputReference;

new GoogleFirebaseHostingVersionConfigRewritesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob">resetGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun">resetRun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRun` <a name="putRun" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun"></a>

```java
public void putRun(GoogleFirebaseHostingVersionConfigRewritesRun value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `resetFunction` <a name="resetFunction" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetFunction"></a>

```java
public void resetFunction()
```

##### `resetGlob` <a name="resetGlob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetGlob"></a>

```java
public void resetGlob()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetRun` <a name="resetRun" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.resetRun"></a>

```java
public void resetRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run">run</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput">functionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput">globInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput">runInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function">function</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob">glob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.run"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesRunOutputReference getRun();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference">GoogleFirebaseHostingVersionConfigRewritesRunOutputReference</a>

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.functionInput"></a>

```java
public java.lang.String getFunctionInput();
```

- *Type:* java.lang.String

---

##### `globInput`<sup>Optional</sup> <a name="globInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.globInput"></a>

```java
public java.lang.String getGlobInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.runInput"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesRun getRunInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.function"></a>

```java
public java.lang.String getFunction();
```

- *Type:* java.lang.String

---

##### `glob`<sup>Required</sup> <a name="glob" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.glob"></a>

```java
public java.lang.String getGlob();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseHostingVersionConfigRewrites getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewrites">GoogleFirebaseHostingVersionConfigRewrites</a>

---


### GoogleFirebaseHostingVersionConfigRewritesRunOutputReference <a name="GoogleFirebaseHostingVersionConfigRewritesRunOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference;

new GoogleFirebaseHostingVersionConfigRewritesRunOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRunOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseHostingVersionConfigRewritesRun getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionConfigRewritesRun">GoogleFirebaseHostingVersionConfigRewritesRun</a>

---


### GoogleFirebaseHostingVersionTimeoutsOutputReference <a name="GoogleFirebaseHostingVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_hosting_version.GoogleFirebaseHostingVersionTimeoutsOutputReference;

new GoogleFirebaseHostingVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseHostingVersionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseHostingVersion.GoogleFirebaseHostingVersionTimeouts">GoogleFirebaseHostingVersionTimeouts</a>

---



