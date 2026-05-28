# `googleParameterManagerRegionalParameter` Submodule <a name="`googleParameterManagerRegionalParameter` Submodule" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerRegionalParameter <a name="GoogleParameterManagerRegionalParameter" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter google_parameter_manager_regional_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameter;

GoogleParameterManagerRegionalParameter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parameterId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleParameterManagerRegionalParameterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.parameterId">parameterId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#location GoogleParameterManagerRegionalParameter#location}

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.parameterId"></a>

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#parameter_id GoogleParameterManagerRegionalParameter#parameter_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#deletion_policy GoogleParameterManagerRegionalParameter#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#format GoogleParameterManagerRegionalParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#kms_key GoogleParameterManagerRegionalParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#labels GoogleParameterManagerRegionalParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#timeouts GoogleParameterManagerRegionalParameter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts"></a>

```java
public void putTimeouts(GoogleParameterManagerRegionalParameterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameter;

GoogleParameterManagerRegionalParameter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameter;

GoogleParameterManagerRegionalParameter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameter;

GoogleParameterManagerRegionalParameter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameter;

GoogleParameterManagerRegionalParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleParameterManagerRegionalParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleParameterManagerRegionalParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleParameterManagerRegionalParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleParameterManagerRegionalParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerRegionalParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember">policyMember</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput">parameterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyMember`<sup>Required</sup> <a name="policyMember" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.policyMember"></a>

```java
public GoogleParameterManagerRegionalParameterPolicyMemberList getPolicyMember();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList">GoogleParameterManagerRegionalParameterPolicyMemberList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeouts"></a>

```java
public GoogleParameterManagerRegionalParameterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference">GoogleParameterManagerRegionalParameterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterIdInput"></a>

```java
public java.lang.String getParameterIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.timeoutsInput"></a>

```java
public IResolvable|GoogleParameterManagerRegionalParameterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerRegionalParameterConfig <a name="GoogleParameterManagerRegionalParameterConfig" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterConfig;

GoogleParameterManagerRegionalParameterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parameterId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .kmsKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleParameterManagerRegionalParameterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the regional parameter. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | This must be unique within the project. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels assigned to this regional Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the regional parameter. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#location GoogleParameterManagerRegionalParameter#location}

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#parameter_id GoogleParameterManagerRegionalParameter#parameter_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#deletion_policy GoogleParameterManagerRegionalParameter#deletion_policy}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format type of the regional parameter. Default value: "UNFORMATTED" Possible values: ["UNFORMATTED", "YAML", "JSON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#format GoogleParameterManagerRegionalParameter#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#id GoogleParameterManagerRegionalParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The resource name of the Cloud KMS CryptoKey used to encrypt regional parameter version payload. Format 'projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#kms_key GoogleParameterManagerRegionalParameter#kms_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels assigned to this regional Parameter.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values must be between 0 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes,
and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be assigned to a given resource.

An object containing a list of "key": value pairs. Example:
{ "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#labels GoogleParameterManagerRegionalParameter#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#project GoogleParameterManagerRegionalParameter#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterConfig.property.timeouts"></a>

```java
public GoogleParameterManagerRegionalParameterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#timeouts GoogleParameterManagerRegionalParameter#timeouts}

---

### GoogleParameterManagerRegionalParameterPolicyMember <a name="GoogleParameterManagerRegionalParameterPolicyMember" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterPolicyMember;

GoogleParameterManagerRegionalParameterPolicyMember.builder()
    .build();
```


### GoogleParameterManagerRegionalParameterTimeouts <a name="GoogleParameterManagerRegionalParameterTimeouts" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterTimeouts;

GoogleParameterManagerRegionalParameterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#create GoogleParameterManagerRegionalParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#delete GoogleParameterManagerRegionalParameter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_parameter_manager_regional_parameter#update GoogleParameterManagerRegionalParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerRegionalParameterPolicyMemberList <a name="GoogleParameterManagerRegionalParameterPolicyMemberList" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterPolicyMemberList;

new GoogleParameterManagerRegionalParameterPolicyMemberList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get"></a>

```java
public GoogleParameterManagerRegionalParameterPolicyMemberOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleParameterManagerRegionalParameterPolicyMemberOutputReference <a name="GoogleParameterManagerRegionalParameterPolicyMemberOutputReference" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference;

new GoogleParameterManagerRegionalParameterPolicyMemberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal">iamPolicyNamePrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal">iamPolicyUidPrincipal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamPolicyNamePrincipal`<sup>Required</sup> <a name="iamPolicyNamePrincipal" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```java
public java.lang.String getIamPolicyNamePrincipal();
```

- *Type:* java.lang.String

---

##### `iamPolicyUidPrincipal`<sup>Required</sup> <a name="iamPolicyUidPrincipal" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```java
public java.lang.String getIamPolicyUidPrincipal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMemberOutputReference.property.internalValue"></a>

```java
public GoogleParameterManagerRegionalParameterPolicyMember getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterPolicyMember">GoogleParameterManagerRegionalParameterPolicyMember</a>

---


### GoogleParameterManagerRegionalParameterTimeoutsOutputReference <a name="GoogleParameterManagerRegionalParameterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_parameter_manager_regional_parameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference;

new GoogleParameterManagerRegionalParameterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleParameterManagerRegionalParameterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleParameterManagerRegionalParameter.GoogleParameterManagerRegionalParameterTimeouts">GoogleParameterManagerRegionalParameterTimeouts</a>

---



