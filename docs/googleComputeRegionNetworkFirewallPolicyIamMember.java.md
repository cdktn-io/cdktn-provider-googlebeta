# `googleComputeRegionNetworkFirewallPolicyIamMember` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyIamMember` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMember <a name="GoogleComputeRegionNetworkFirewallPolicyIamMember" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member google_compute_region_network_firewall_policy_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMember;

GoogleComputeRegionNetworkFirewallPolicyIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#condition GoogleComputeRegionNetworkFirewallPolicyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition"></a>

```java
public void putCondition(GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMember;

GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMember;

GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMember;

GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMember;

GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkFirewallPolicyIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionNetworkFirewallPolicyIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.condition"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference">GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.conditionInput"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition;

GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#expression GoogleComputeRegionNetworkFirewallPolicyIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#title GoogleComputeRegionNetworkFirewallPolicyIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#description GoogleComputeRegionNetworkFirewallPolicyIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#expression GoogleComputeRegionNetworkFirewallPolicyIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#title GoogleComputeRegionNetworkFirewallPolicyIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#description GoogleComputeRegionNetworkFirewallPolicyIamMember#description}.

---

### GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig;

GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .member(java.lang.String)
    .name(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#member GoogleComputeRegionNetworkFirewallPolicyIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#name GoogleComputeRegionNetworkFirewallPolicyIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#role GoogleComputeRegionNetworkFirewallPolicyIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.condition"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#condition GoogleComputeRegionNetworkFirewallPolicyIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#id GoogleComputeRegionNetworkFirewallPolicyIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#project GoogleComputeRegionNetworkFirewallPolicyIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_firewall_policy_iam_member#region GoogleComputeRegionNetworkFirewallPolicyIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_firewall_policy_iam_member.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference;

new GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkFirewallPolicyIamMember.GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition">GoogleComputeRegionNetworkFirewallPolicyIamMemberCondition</a>

---



