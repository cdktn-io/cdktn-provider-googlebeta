# `googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule <a name="`googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRule <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule;

GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .match(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch)
    .networkPolicy(java.lang.String)
    .priority(java.lang.Number)
//  .action(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .ruleName(java.lang.String)
//  .targetSecureTags(IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetSecureTags">targetSecureTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>></code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.networkPolicy"></a>

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetSecureTags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>>

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags">putTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags">resetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction"></a>

```java
public void putAction(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch"></a>

```java
public void putMatch(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `putTargetSecureTags` <a name="putTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags"></a>

```java
public void putTargetSecureTags(IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction"></a>

```java
public void resetAction()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetTargetSecureTags` <a name="resetTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags"></a>

```java
public void resetTargetSecureTags()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule;

GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule;

GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule;

GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule;

GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRegionNetworkPolicyTrafficClassificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount">ruleTupleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags">targetSecureTags</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput">networkPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput">targetSecureTagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount"></a>

```java
public java.lang.Number getRuleTupleCount();
```

- *Type:* java.lang.Number

---

##### `targetSecureTags`<sup>Required</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList getTargetSecureTags();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction getActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput"></a>

```java
public java.lang.String getNetworkPolicyInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `targetSecureTagsInput`<sup>Optional</sup> <a name="targetSecureTagsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags> getTargetSecureTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.builder()
//  .dscpMode(java.lang.String)
//  .dscpValue(java.lang.Number)
//  .trafficClass(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode">dscpMode</a></code> | <code>java.lang.String</code> | DSCP mode. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue">dscpValue</a></code> | <code>java.lang.Number</code> | Custom DSCP value from 0-63 range. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass">trafficClass</a></code> | <code>java.lang.String</code> | The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type">type</a></code> | <code>java.lang.String</code> | Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"]. |

---

##### `dscpMode`<sup>Optional</sup> <a name="dscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode"></a>

```java
public java.lang.String getDscpMode();
```

- *Type:* java.lang.String

DSCP mode.

When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}

---

##### `dscpValue`<sup>Optional</sup> <a name="dscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue"></a>

```java
public java.lang.Number getDscpValue();
```

- *Type:* java.lang.Number

Custom DSCP value from 0-63 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}

---

##### `trafficClass`<sup>Optional</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass"></a>

```java
public java.lang.String getTrafficClass();
```

- *Type:* java.lang.String

The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .match(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch)
    .networkPolicy(java.lang.String)
    .priority(java.lang.Number)
//  .action(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .ruleName(java.lang.String)
//  .targetSecureTags(IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags">targetSecureTags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>></code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction getAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `targetSecureTags`<sup>Optional</sup> <a name="targetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags> getTargetSecureTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>>

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.builder()
    .layer4Configs(IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs>)
//  .destIpRanges(java.util.List<java.lang.String>)
//  .srcIpRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs">layer4Configs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>></code> | layer4_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs> getLayer4Configs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>>

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.builder()
    .ipProtocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol type is required when creating a traffic classification rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ip_protocol GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ports GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ports}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name">name</a></code> | <code>java.lang.String</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#name}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts;

GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode">resetDscpMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue">resetDscpValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass">resetTrafficClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDscpMode` <a name="resetDscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode"></a>

```java
public void resetDscpMode()
```

##### `resetDscpValue` <a name="resetDscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue"></a>

```java
public void resetDscpValue()
```

##### `resetTrafficClass` <a name="resetTrafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass"></a>

```java
public void resetTrafficClass()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput">dscpModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput">dscpValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput">trafficClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode">dscpMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue">dscpValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass">trafficClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dscpModeInput`<sup>Optional</sup> <a name="dscpModeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput"></a>

```java
public java.lang.String getDscpModeInput();
```

- *Type:* java.lang.String

---

##### `dscpValueInput`<sup>Optional</sup> <a name="dscpValueInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput"></a>

```java
public java.lang.Number getDscpValueInput();
```

- *Type:* java.lang.Number

---

##### `trafficClassInput`<sup>Optional</sup> <a name="trafficClassInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput"></a>

```java
public java.lang.String getTrafficClassInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dscpMode`<sup>Required</sup> <a name="dscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode"></a>

```java
public java.lang.String getDscpMode();
```

- *Type:* java.lang.String

---

##### `dscpValue`<sup>Required</sup> <a name="dscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue"></a>

```java
public java.lang.Number getDscpValue();
```

- *Type:* java.lang.Number

---

##### `trafficClass`<sup>Required</sup> <a name="trafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass"></a>

```java
public java.lang.String getTrafficClass();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs">putLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Configs` <a name="putLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs"></a>

```java
public void putLayer4Configs(IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>>

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs">layer4Configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput">layer4ConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer4Configs`<sup>Required</sup> <a name="layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList getLayer4Configs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4ConfigsInput`<sup>Optional</sup> <a name="layer4ConfigsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs> getLayer4ConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs</a>>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get"></a>

```java
public GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_region_network_policy_traffic_classification_rule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference;

new GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---



