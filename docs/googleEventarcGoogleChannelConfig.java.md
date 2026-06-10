# `googleEventarcGoogleChannelConfig` Submodule <a name="`googleEventarcGoogleChannelConfig` Submodule" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcGoogleChannelConfig <a name="GoogleEventarcGoogleChannelConfig" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config google_eventarc_google_channel_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfig;

GoogleEventarcGoogleChannelConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .cryptoKeyName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleEventarcGoogleChannelConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#location GoogleEventarcGoogleChannelConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#name GoogleEventarcGoogleChannelConfig#name}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.cryptoKeyName"></a>

- *Type:* java.lang.String

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#crypto_key_name GoogleEventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#timeouts GoogleEventarcGoogleChannelConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleEventarcGoogleChannelConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

---

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetCryptoKeyName"></a>

```java
public void resetCryptoKeyName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfig;

GoogleEventarcGoogleChannelConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfig;

GoogleEventarcGoogleChannelConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfig;

GoogleEventarcGoogleChannelConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfig;

GoogleEventarcGoogleChannelConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleEventarcGoogleChannelConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleEventarcGoogleChannelConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleEventarcGoogleChannelConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleEventarcGoogleChannelConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEventarcGoogleChannelConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeouts"></a>

```java
public GoogleEventarcGoogleChannelConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference">GoogleEventarcGoogleChannelConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyNameInput"></a>

```java
public java.lang.String getCryptoKeyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleEventarcGoogleChannelConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcGoogleChannelConfigConfig <a name="GoogleEventarcGoogleChannelConfigConfig" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfigConfig;

GoogleEventarcGoogleChannelConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
//  .cryptoKeyName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleEventarcGoogleChannelConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#location GoogleEventarcGoogleChannelConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. The resource name of the config. Must be in the format of, 'projects/{project}/locations/{location}/googleChannelConfig'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#name GoogleEventarcGoogleChannelConfig#name}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

Optional.

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It must match the pattern 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#crypto_key_name GoogleEventarcGoogleChannelConfig#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#id GoogleEventarcGoogleChannelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#project GoogleEventarcGoogleChannelConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigConfig.property.timeouts"></a>

```java
public GoogleEventarcGoogleChannelConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#timeouts GoogleEventarcGoogleChannelConfig#timeouts}

---

### GoogleEventarcGoogleChannelConfigTimeouts <a name="GoogleEventarcGoogleChannelConfigTimeouts" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfigTimeouts;

GoogleEventarcGoogleChannelConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#create GoogleEventarcGoogleChannelConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#delete GoogleEventarcGoogleChannelConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_eventarc_google_channel_config#update GoogleEventarcGoogleChannelConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcGoogleChannelConfigTimeoutsOutputReference <a name="GoogleEventarcGoogleChannelConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_eventarc_google_channel_config.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference;

new GoogleEventarcGoogleChannelConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleEventarcGoogleChannelConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleEventarcGoogleChannelConfig.GoogleEventarcGoogleChannelConfigTimeouts">GoogleEventarcGoogleChannelConfigTimeouts</a>

---



