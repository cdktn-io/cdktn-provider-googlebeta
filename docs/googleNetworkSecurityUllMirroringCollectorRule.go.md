# `googleNetworkSecurityUllMirroringCollectorRule` Submodule <a name="`googleNetworkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRule <a name="GoogleNetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.NewGoogleNetworkSecurityUllMirroringCollectorRule(scope Construct, id *string, config GoogleNetworkSecurityUllMirroringCollectorRuleConfig) GoogleNetworkSecurityUllMirroringCollectorRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig">GoogleNetworkSecurityUllMirroringCollectorRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig">GoogleNetworkSecurityUllMirroringCollectorRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```go
func PutMatch(value GoogleNetworkSecurityUllMirroringCollectorRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollectorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">UllMirroringCollectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">UllMirroringCollectorRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match"></a>

```go
func Match() GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```go
func MatchInput() GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UllMirroringCollectorInput`<sup>Optional</sup> <a name="UllMirroringCollectorInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```go
func UllMirroringCollectorInput() *string
```

- *Type:* *string

---

##### `UllMirroringCollectorRuleIdInput`<sup>Optional</sup> <a name="UllMirroringCollectorRuleIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```go
func UllMirroringCollectorRuleIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```go
func UllMirroringCollector() *string
```

- *Type:* *string

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```go
func UllMirroringCollectorRuleId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleConfig <a name="GoogleNetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

&googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Match: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch,
	UllMirroringCollector: *string,
	UllMirroringCollectorRuleId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">UllMirroringCollector</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">UllMirroringCollectorRuleId</a></code> | <code>*string</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```go
Match GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `UllMirroringCollector`<sup>Required</sup> <a name="UllMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```go
UllMirroringCollector *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `UllMirroringCollectorRuleId`<sup>Required</sup> <a name="UllMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```go
UllMirroringCollectorRuleId *string
```

- *Type:* *string

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#deletion_policy GoogleNetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleMatch <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

&googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch {
	Direction: *string,
	DstIpRanges: *[]*string,
	IpProtocols: *[]*string,
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction">Direction</a></code> | <code>*string</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">DstIpRanges</a></code> | <code>*[]*string</code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#direction GoogleNetworkSecurityUllMirroringCollectorRule#direction}

---

##### `DstIpRanges`<sup>Optional</sup> <a name="DstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```go
DstIpRanges *[]*string
```

- *Type:* *[]*string

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#dst_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```go
IpProtocols *[]*string
```

- *Type:* *[]*string

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ip_protocols GoogleNetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#src_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

&googlenetworksecurityullmirroringcollectorrule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.NewGoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">ResetDstIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetDstIpRanges` <a name="ResetDstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```go
func ResetDstIpRanges()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```go
func ResetIpProtocols()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">DstIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">DstIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `DstIpRangesInput`<sup>Optional</sup> <a name="DstIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```go
func DstIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```go
func IpProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `DstIpRanges`<sup>Required</sup> <a name="DstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```go
func DstIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```go
func IpProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecurityUllMirroringCollectorRuleMatch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollectorrule"

googlenetworksecurityullmirroringcollectorrule.NewGoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



