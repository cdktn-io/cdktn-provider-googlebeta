# `googleRedisClusterAclPolicy` Submodule <a name="`googleRedisClusterAclPolicy` Submodule" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisClusterAclPolicy <a name="GoogleRedisClusterAclPolicy" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy google_redis_cluster_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicy;

GoogleRedisClusterAclPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclPolicyId(java.lang.String)
    .location(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleRedisClusterAclPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#id GoogleRedisClusterAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#project GoogleRedisClusterAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.aclPolicyId"></a>

- *Type:* java.lang.String

The logical name of the ACL policy in the customer project with the following restrictions:.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the customer project / location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#acl_policy_id GoogleRedisClusterAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#location GoogleRedisClusterAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#rules GoogleRedisClusterAclPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#deletion_policy GoogleRedisClusterAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#id GoogleRedisClusterAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#project GoogleRedisClusterAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#timeouts GoogleRedisClusterAclPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleRedisClusterAclPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleRedisClusterAclPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicy;

GoogleRedisClusterAclPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicy;

GoogleRedisClusterAclPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicy;

GoogleRedisClusterAclPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicy;

GoogleRedisClusterAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleRedisClusterAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleRedisClusterAclPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleRedisClusterAclPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleRedisClusterAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleRedisClusterAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList">GoogleRedisClusterAclPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference">GoogleRedisClusterAclPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.aclPolicyIdInput">aclPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.rules"></a>

```java
public GoogleRedisClusterAclPolicyRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList">GoogleRedisClusterAclPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.timeouts"></a>

```java
public GoogleRedisClusterAclPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference">GoogleRedisClusterAclPolicyTimeoutsOutputReference</a>

---

##### `aclPolicyIdInput`<sup>Optional</sup> <a name="aclPolicyIdInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.aclPolicyIdInput"></a>

```java
public java.lang.String getAclPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.rulesInput"></a>

```java
public IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.timeoutsInput"></a>

```java
public IResolvable|GoogleRedisClusterAclPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.aclPolicyId"></a>

```java
public java.lang.String getAclPolicyId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterAclPolicyConfig <a name="GoogleRedisClusterAclPolicyConfig" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyConfig;

GoogleRedisClusterAclPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .aclPolicyId(java.lang.String)
    .location(java.lang.String)
    .rules(IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleRedisClusterAclPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.aclPolicyId">aclPolicyId</a></code> | <code>java.lang.String</code> | The logical name of the ACL policy in the customer project with the following restrictions:. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>></code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#id GoogleRedisClusterAclPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#project GoogleRedisClusterAclPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aclPolicyId`<sup>Required</sup> <a name="aclPolicyId" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.aclPolicyId"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#acl_policy_id GoogleRedisClusterAclPolicy#acl_policy_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#location GoogleRedisClusterAclPolicy#location}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.rules"></a>

```java
public IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#rules GoogleRedisClusterAclPolicy#rules}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#deletion_policy GoogleRedisClusterAclPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#id GoogleRedisClusterAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#project GoogleRedisClusterAclPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyConfig.property.timeouts"></a>

```java
public GoogleRedisClusterAclPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#timeouts GoogleRedisClusterAclPolicy#timeouts}

---

### GoogleRedisClusterAclPolicyRules <a name="GoogleRedisClusterAclPolicyRules" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyRules;

GoogleRedisClusterAclPolicyRules.builder()
    .rule(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules.property.rule">rule</a></code> | <code>java.lang.String</code> | The rule to be applied to the username. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the IAM user or service account to be added to the ACL policy. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

The rule to be applied to the username.

Ex: "on >password123 ~* +@all"
The format of the rule is defined by Redis OSS:
https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#rule GoogleRedisClusterAclPolicy#rule}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the IAM user or service account to be added to the ACL policy.

This username will be directly set on the Redis OSS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#username GoogleRedisClusterAclPolicy#username}

---

### GoogleRedisClusterAclPolicyTimeouts <a name="GoogleRedisClusterAclPolicyTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyTimeouts;

GoogleRedisClusterAclPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#create GoogleRedisClusterAclPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#delete GoogleRedisClusterAclPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#update GoogleRedisClusterAclPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#create GoogleRedisClusterAclPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#delete GoogleRedisClusterAclPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_redis_cluster_acl_policy#update GoogleRedisClusterAclPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterAclPolicyRulesList <a name="GoogleRedisClusterAclPolicyRulesList" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyRulesList;

new GoogleRedisClusterAclPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.get"></a>

```java
public GoogleRedisClusterAclPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleRedisClusterAclPolicyRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>>

---


### GoogleRedisClusterAclPolicyRulesOutputReference <a name="GoogleRedisClusterAclPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyRulesOutputReference;

new GoogleRedisClusterAclPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleRedisClusterAclPolicyRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyRules">GoogleRedisClusterAclPolicyRules</a>

---


### GoogleRedisClusterAclPolicyTimeoutsOutputReference <a name="GoogleRedisClusterAclPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_redis_cluster_acl_policy.GoogleRedisClusterAclPolicyTimeoutsOutputReference;

new GoogleRedisClusterAclPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleRedisClusterAclPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleRedisClusterAclPolicy.GoogleRedisClusterAclPolicyTimeouts">GoogleRedisClusterAclPolicyTimeouts</a>

---



