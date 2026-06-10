# `googleKmsOrganizationKajPolicyConfig` Submodule <a name="`googleKmsOrganizationKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsOrganizationKajPolicyConfig <a name="GoogleKmsOrganizationKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfig;

GoogleKmsOrganizationKajPolicyConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .defaultKeyAccessJustificationPolicy(GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsOrganizationKajPolicyConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The organization number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The organization number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}

---

##### `defaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.defaultKeyAccessJustificationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">putDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">resetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultKeyAccessJustificationPolicy` <a name="putDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```java
public void putDefaultKeyAccessJustificationPolicy(GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsOrganizationKajPolicyConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `resetDefaultKeyAccessJustificationPolicy` <a name="resetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```java
public void resetDefaultKeyAccessJustificationPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfig;

GoogleKmsOrganizationKajPolicyConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfig;

GoogleKmsOrganizationKajPolicyConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfig;

GoogleKmsOrganizationKajPolicyConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfig;

GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsOrganizationKajPolicyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsOrganizationKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsOrganizationKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">defaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference getDefaultKeyAccessJustificationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a>

---

##### `defaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy getDefaultKeyAccessJustificationPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleKmsOrganizationKajPolicyConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsOrganizationKajPolicyConfigConfig <a name="GoogleKmsOrganizationKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfigConfig;

GoogleKmsOrganizationKajPolicyConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .organization(java.lang.String)
//  .defaultKeyAccessJustificationPolicy(GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy)
//  .id(java.lang.String)
//  .timeouts(GoogleKmsOrganizationKajPolicyConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">defaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}

---

##### `defaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="defaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy getDefaultKeyAccessJustificationPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}

---

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy;

GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.builder()
//  .allowedAccessReasons(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>java.util.List<java.lang.String></code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `allowedAccessReasons`<sup>Optional</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasons();
```

- *Type:* java.util.List<java.lang.String>

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#allowed_access_reasons GoogleKmsOrganizationKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsOrganizationKajPolicyConfigTimeouts <a name="GoogleKmsOrganizationKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfigTimeouts;

GoogleKmsOrganizationKajPolicyConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference;

new GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">resetAllowedAccessReasons</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedAccessReasons` <a name="resetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```java
public void resetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">allowedAccessReasonsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">allowedAccessReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAccessReasonsInput`<sup>Optional</sup> <a name="allowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasonsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAccessReasons`<sup>Required</sup> <a name="allowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```java
public java.util.List<java.lang.String> getAllowedAccessReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```java
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_organization_kaj_policy_config.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference;

new GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleKmsOrganizationKajPolicyConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---



