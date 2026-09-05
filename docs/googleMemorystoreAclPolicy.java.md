# `googleMemorystoreAclPolicy` Submodule <a name="`googleMemorystoreAclPolicy` Submodule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMemorystoreAclPolicy <a name="GoogleMemorystoreAclPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy google_memorystore_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicy;

GoogleMemorystoreAclPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclPolicyId(java.lang.String)
    .location(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMemorystoreAclPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.aclPolicyId"></a>

- *Type:* java.lang.String

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#acl_policy_id GoogleMemorystoreAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#location GoogleMemorystoreAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rules GoogleMemorystoreAclPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#deletion_policy GoogleMemorystoreAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#timeouts GoogleMemorystoreAclPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleMemorystoreAclPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicy;

GoogleMemorystoreAclPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicy;

GoogleMemorystoreAclPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicy;

GoogleMemorystoreAclPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicy;

GoogleMemorystoreAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMemorystoreAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleMemorystoreAclPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMemorystoreAclPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMemorystoreAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMemorystoreAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput">aclPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rules"></a>

```java
public GoogleMemorystoreAclPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList">GoogleMemorystoreAclPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeouts"></a>

```java
public GoogleMemorystoreAclPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference">GoogleMemorystoreAclPolicyTimeoutsOutputReference</a>

---

##### `aclPolicyIdInput`<sup>Optional</sup> <a name="aclPolicyIdInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyIdInput"></a>

```java
public java.lang.String getAclPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleMemorystoreAclPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.aclPolicyId"></a>

```java
public java.lang.String getAclPolicyId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMemorystoreAclPolicyConfig <a name="GoogleMemorystoreAclPolicyConfig" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyConfig;

GoogleMemorystoreAclPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclPolicyId(java.lang.String)
    .location(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleMemorystoreAclPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.aclPolicyId"></a>

```java
public java.lang.String getAclPolicyId();
```

- *Type:* java.lang.String

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#acl_policy_id GoogleMemorystoreAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#location GoogleMemorystoreAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rules GoogleMemorystoreAclPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#deletion_policy GoogleMemorystoreAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#id GoogleMemorystoreAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#project GoogleMemorystoreAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyConfig.property.timeouts"></a>

```java
public GoogleMemorystoreAclPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#timeouts GoogleMemorystoreAclPolicy#timeouts}

---

### GoogleMemorystoreAclPolicyRules <a name="GoogleMemorystoreAclPolicyRules" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyRules;

GoogleMemorystoreAclPolicyRules.builder()
    .rule(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule">rule</a></code> | <code>java.lang.String</code> | The rule to be applied to the username. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the IAM user or service account to be added to the ACL policy. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

The rule to be applied to the username.

Ex: "on >password123 ~* +@all"
The format of the rule is defined by Valkey OSS:
https://valkey.io/topics/acl/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#rule GoogleMemorystoreAclPolicy#rule}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the IAM user or service account to be added to the ACL policy.

This username will be directly set on the Valkey OSS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#username GoogleMemorystoreAclPolicy#username}

---

### GoogleMemorystoreAclPolicyTimeouts <a name="GoogleMemorystoreAclPolicyTimeouts" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyTimeouts;

GoogleMemorystoreAclPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#create GoogleMemorystoreAclPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#delete GoogleMemorystoreAclPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_memorystore_acl_policy#update GoogleMemorystoreAclPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMemorystoreAclPolicyRulesList <a name="GoogleMemorystoreAclPolicyRulesList" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyRulesList;

new GoogleMemorystoreAclPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get"></a>

```java
public GoogleMemorystoreAclPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleMemorystoreAclPolicyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>>

---


### GoogleMemorystoreAclPolicyRulesOutputReference <a name="GoogleMemorystoreAclPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyRulesOutputReference;

new GoogleMemorystoreAclPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleMemorystoreAclPolicyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyRules">GoogleMemorystoreAclPolicyRules</a>

---


### GoogleMemorystoreAclPolicyTimeoutsOutputReference <a name="GoogleMemorystoreAclPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_memorystore_acl_policy.GoogleMemorystoreAclPolicyTimeoutsOutputReference;

new GoogleMemorystoreAclPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleMemorystoreAclPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMemorystoreAclPolicy.GoogleMemorystoreAclPolicyTimeouts">GoogleMemorystoreAclPolicyTimeouts</a>

---



