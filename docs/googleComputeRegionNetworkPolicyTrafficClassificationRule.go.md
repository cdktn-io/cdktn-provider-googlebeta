# `googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule <a name="`googleComputeRegionNetworkPolicyTrafficClassificationRule` Submodule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRule <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRule" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule google_compute_region_network_policy_traffic_classification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRule(scope Construct, id *string, config GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig) GoogleComputeRegionNetworkPolicyTrafficClassificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags">PutTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags">ResetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction"></a>

```go
func PutAction(value GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch"></a>

```go
func PutMatch(value GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `PutTargetSecureTags` <a name="PutTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags"></a>

```go
func PutTargetSecureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTargetSecureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetRuleName"></a>

```go
func ResetRuleName()
```

##### `ResetTargetSecureTags` <a name="ResetTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetSecureTags"></a>

```go
func ResetTargetSecureTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTargetServiceAccounts"></a>

```go
func ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeRegionNetworkPolicyTrafficClassificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionNetworkPolicyTrafficClassificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkPolicyTrafficClassificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount">RuleTupleCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags">TargetSecureTags</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput">TargetSecureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.action"></a>

```go
func Action() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.match"></a>

```go
func Match() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleTupleCount"></a>

```go
func RuleTupleCount() *f64
```

- *Type:* *f64

---

##### `TargetSecureTags`<sup>Required</sup> <a name="TargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTags"></a>

```go
func TargetSecureTags() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.actionInput"></a>

```go
func ActionInput() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.matchInput"></a>

```go
func MatchInput() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicyInput"></a>

```go
func NetworkPolicyInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `TargetSecureTagsInput`<sup>Optional</sup> <a name="TargetSecureTagsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetSecureTagsInput"></a>

```go
func TargetSecureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccountsInput"></a>

```go
func TargetServiceAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.networkPolicy"></a>

```go
func NetworkPolicy() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.targetServiceAccounts"></a>

```go
func TargetServiceAccounts() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction {
	DscpMode: *string,
	DscpValue: *f64,
	TrafficClass: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode">DscpMode</a></code> | <code>*string</code> | DSCP mode. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue">DscpValue</a></code> | <code>*f64</code> | Custom DSCP value from 0-63 range. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass">TrafficClass</a></code> | <code>*string</code> | The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type">Type</a></code> | <code>*string</code> | Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"]. |

---

##### `DscpMode`<sup>Optional</sup> <a name="DscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpMode"></a>

```go
DscpMode *string
```

- *Type:* *string

DSCP mode.

When set to AUTO, the DSCP value will be picked automatically based on selected trafficClass. Otherwise,dscpValue needs to be explicitly specified. Possible values: ["AUTO", "CUSTOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_mode GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_mode}

---

##### `DscpValue`<sup>Optional</sup> <a name="DscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.dscpValue"></a>

```go
DscpValue *f64
```

- *Type:* *f64

Custom DSCP value from 0-63 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dscp_value GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dscp_value}

---

##### `TrafficClass`<sup>Optional</sup> <a name="TrafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.trafficClass"></a>

```go
TrafficClass *string
```

- *Type:* *string

The traffic class that should be applied to the matching packet. Possible values: ["TC1", "TC2", "TC3", "TC4", "TC5", "TC6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#traffic_class GoogleComputeRegionNetworkPolicyTrafficClassificationRule#traffic_class}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Always apply_traffic_classification for Traffic Classification Rules. Default value: "apply_traffic_classification" Possible values: ["apply_traffic_classification"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#type GoogleComputeRegionNetworkPolicyTrafficClassificationRule#type}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Match: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch,
	NetworkPolicy: *string,
	Priority: *f64,
	Action: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction,
	DeletionPolicy: *string,
	Description: *string,
	Disabled: interface{},
	Id: *string,
	Project: *string,
	Region: *string,
	RuleName: *string,
	TargetSecureTags: interface{},
	TargetServiceAccounts: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Denotes whether the network policy rule is disabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region">Region</a></code> | <code>*string</code> | The location of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags">TargetSecureTags</a></code> | <code>interface{}</code> | target_secure_tags block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>*[]*string</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.match"></a>

```go
Match GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#match GoogleComputeRegionNetworkPolicyTrafficClassificationRule#match}

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.networkPolicy"></a>

```go
NetworkPolicy *string
```

- *Type:* *string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#network_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#network_policy}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 1 and 2147482647.
The priority values from 2147482648 to 2147483647 (1000) are reserved for system default network policy rules.
Rules are evaluated from highest to lowest priority where 1 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#priority GoogleComputeRegionNetworkPolicyTrafficClassificationRule#priority}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.action"></a>

```go
Action GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#action GoogleComputeRegionNetworkPolicyTrafficClassificationRule#action}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#deletion_policy GoogleComputeRegionNetworkPolicyTrafficClassificationRule#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#description GoogleComputeRegionNetworkPolicyTrafficClassificationRule#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Denotes whether the network policy rule is disabled.

When set to true, the network policy rule is not enforced and traffic behaves as if it did not exist.
If this is unspecified, the network policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#disabled GoogleComputeRegionNetworkPolicyTrafficClassificationRule#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#id GoogleComputeRegionNetworkPolicyTrafficClassificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#project GoogleComputeRegionNetworkPolicyTrafficClassificationRule#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#region GoogleComputeRegionNetworkPolicyTrafficClassificationRule#region}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#rule_name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#rule_name}

---

##### `TargetSecureTags`<sup>Optional</sup> <a name="TargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetSecureTags"></a>

```go
TargetSecureTags interface{}
```

- *Type:* interface{}

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_secure_tags GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_secure_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.targetServiceAccounts"></a>

```go
TargetServiceAccounts *[]*string
```

- *Type:* *[]*string

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#target_service_accounts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#timeouts GoogleComputeRegionNetworkPolicyTrafficClassificationRule#timeouts}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch {
	Layer4Configs: interface{},
	DestIpRanges: *[]*string,
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs">Layer4Configs</a></code> | <code>interface{}</code> | layer4_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.layer4Configs"></a>

```go
Layer4Configs interface{}
```

- *Type:* interface{}

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#layer4_configs GoogleComputeRegionNetworkPolicyTrafficClassificationRule#layer4_configs}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#dest_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#dest_ip_ranges}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#src_ip_ranges GoogleComputeRegionNetworkPolicyTrafficClassificationRule#src_ip_ranges}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs {
	IpProtocol: *string,
	Ports: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports">Ports</a></code> | <code>*[]*string</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which this rule applies.

The protocol type is required when creating a traffic classification rule.
This value can either be one of the following well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ip_protocol GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4Configs.property.ports"></a>

```go
Ports *[]*string
```

- *Type:* *[]*string

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and ["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#ports GoogleComputeRegionNetworkPolicyTrafficClassificationRule#ports}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name">Name</a></code> | <code>*string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTags.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the secure tag, created with TagManager's TagValue API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#name GoogleComputeRegionNetworkPolicyTrafficClassificationRule#name}

---

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

&googlecomputeregionnetworkpolicytrafficclassificationrule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#create GoogleComputeRegionNetworkPolicyTrafficClassificationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#delete GoogleComputeRegionNetworkPolicyTrafficClassificationRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_compute_region_network_policy_traffic_classification_rule#update GoogleComputeRegionNetworkPolicyTrafficClassificationRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode">ResetDscpMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue">ResetDscpValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass">ResetTrafficClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDscpMode` <a name="ResetDscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpMode"></a>

```go
func ResetDscpMode()
```

##### `ResetDscpValue` <a name="ResetDscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetDscpValue"></a>

```go
func ResetDscpValue()
```

##### `ResetTrafficClass` <a name="ResetTrafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetTrafficClass"></a>

```go
func ResetTrafficClass()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput">DscpModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput">DscpValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput">TrafficClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode">DscpMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue">DscpValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass">TrafficClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DscpModeInput`<sup>Optional</sup> <a name="DscpModeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpModeInput"></a>

```go
func DscpModeInput() *string
```

- *Type:* *string

---

##### `DscpValueInput`<sup>Optional</sup> <a name="DscpValueInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValueInput"></a>

```go
func DscpValueInput() *f64
```

- *Type:* *f64

---

##### `TrafficClassInput`<sup>Optional</sup> <a name="TrafficClassInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClassInput"></a>

```go
func TrafficClassInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DscpMode`<sup>Required</sup> <a name="DscpMode" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpMode"></a>

```go
func DscpMode() *string
```

- *Type:* *string

---

##### `DscpValue`<sup>Required</sup> <a name="DscpValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.dscpValue"></a>

```go
func DscpValue() *f64
```

- *Type:* *f64

---

##### `TrafficClass`<sup>Required</sup> <a name="TrafficClass" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.trafficClass"></a>

```go
func TrafficClass() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleAction</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports">Ports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```go
func Ports() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs">PutLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Configs` <a name="PutLayer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs"></a>

```go
func PutLayer4Configs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs">Layer4Configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput">Layer4ConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4Configs"></a>

```go
func Layer4Configs() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchLayer4ConfigsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Layer4ConfigsInput`<sup>Optional</sup> <a name="Layer4ConfigsInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```go
func Layer4ConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch">GoogleComputeRegionNetworkPolicyTrafficClassificationRuleMatch</a>

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference <a name="GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlecomputeregionnetworkpolicytrafficclassificationrule"

googlecomputeregionnetworkpolicytrafficclassificationrule.NewGoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeRegionNetworkPolicyTrafficClassificationRule.GoogleComputeRegionNetworkPolicyTrafficClassificationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



