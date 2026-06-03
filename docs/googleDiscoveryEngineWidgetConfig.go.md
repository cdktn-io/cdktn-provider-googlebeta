# `googleDiscoveryEngineWidgetConfig` Submodule <a name="`googleDiscoveryEngineWidgetConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineWidgetConfig <a name="GoogleDiscoveryEngineWidgetConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config google_discovery_engine_widget_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfig(scope Construct, id *string, config GoogleDiscoveryEngineWidgetConfigConfig) GoogleDiscoveryEngineWidgetConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig">GoogleDiscoveryEngineWidgetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig">GoogleDiscoveryEngineWidgetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings">PutAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting">PutHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding">PutUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings">PutUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetAccessSettings">ResetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetHomepageSetting">ResetHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiBranding">ResetUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiSettings">ResetUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetWidgetConfigId">ResetWidgetConfigId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessSettings` <a name="PutAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings"></a>

```go
func PutAccessSettings(value GoogleDiscoveryEngineWidgetConfigAccessSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `PutHomepageSetting` <a name="PutHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting"></a>

```go
func PutHomepageSetting(value GoogleDiscoveryEngineWidgetConfigHomepageSetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDiscoveryEngineWidgetConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

---

##### `PutUiBranding` <a name="PutUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding"></a>

```go
func PutUiBranding(value GoogleDiscoveryEngineWidgetConfigUiBranding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---

##### `PutUiSettings` <a name="PutUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings"></a>

```go
func PutUiSettings(value GoogleDiscoveryEngineWidgetConfigUiSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---

##### `ResetAccessSettings` <a name="ResetAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetAccessSettings"></a>

```go
func ResetAccessSettings()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetCollectionId"></a>

```go
func ResetCollectionId()
```

##### `ResetHomepageSetting` <a name="ResetHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetHomepageSetting"></a>

```go
func ResetHomepageSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUiBranding` <a name="ResetUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiBranding"></a>

```go
func ResetUiBranding()
```

##### `ResetUiSettings` <a name="ResetUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiSettings"></a>

```go
func ResetUiSettings()
```

##### `ResetWidgetConfigId` <a name="ResetWidgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetWidgetConfigId"></a>

```go
func ResetWidgetConfigId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDiscoveryEngineWidgetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDiscoveryEngineWidgetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineWidgetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSetting">HomepageSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference">GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBranding">UiBranding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettings">UiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettingsInput">AccessSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSettingInput">HomepageSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBrandingInput">UiBrandingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettingsInput">UiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigIdInput">WidgetConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigId">WidgetConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessSettings`<sup>Required</sup> <a name="AccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettings"></a>

```go
func AccessSettings() GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference</a>

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `HomepageSetting`<sup>Required</sup> <a name="HomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSetting"></a>

```go
func HomepageSetting() GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeouts"></a>

```go
func Timeouts() GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference">GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference</a>

---

##### `UiBranding`<sup>Required</sup> <a name="UiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBranding"></a>

```go
func UiBranding() GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference</a>

---

##### `UiSettings`<sup>Required</sup> <a name="UiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettings"></a>

```go
func UiSettings() GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference</a>

---

##### `AccessSettingsInput`<sup>Optional</sup> <a name="AccessSettingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettingsInput"></a>

```go
func AccessSettingsInput() GoogleDiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `HomepageSettingInput`<sup>Optional</sup> <a name="HomepageSettingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSettingInput"></a>

```go
func HomepageSettingInput() GoogleDiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UiBrandingInput`<sup>Optional</sup> <a name="UiBrandingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBrandingInput"></a>

```go
func UiBrandingInput() GoogleDiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---

##### `UiSettingsInput`<sup>Optional</sup> <a name="UiSettingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettingsInput"></a>

```go
func UiSettingsInput() GoogleDiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---

##### `WidgetConfigIdInput`<sup>Optional</sup> <a name="WidgetConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigIdInput"></a>

```go
func WidgetConfigIdInput() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WidgetConfigId`<sup>Required</sup> <a name="WidgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigId"></a>

```go
func WidgetConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineWidgetConfigAccessSettings <a name="GoogleDiscoveryEngineWidgetConfigAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigAccessSettings {
	AllowlistedDomains: *[]*string,
	AllowPublicAccess: interface{},
	EnableWebApp: interface{},
	LanguageCode: *string,
	WorkforceIdentityPoolProvider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains">AllowlistedDomains</a></code> | <code>*[]*string</code> | List of domains that are allowed to integrate the search widget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess">AllowPublicAccess</a></code> | <code>interface{}</code> | Whether public unauthenticated access is allowed. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp">EnableWebApp</a></code> | <code>interface{}</code> | Whether web app access is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider">WorkforceIdentityPoolProvider</a></code> | <code>*string</code> | The workforce identity pool provider used to access the widget. |

---

##### `AllowlistedDomains`<sup>Optional</sup> <a name="AllowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains"></a>

```go
AllowlistedDomains *[]*string
```

- *Type:* *[]*string

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#allowlisted_domains GoogleDiscoveryEngineWidgetConfig#allowlisted_domains}

---

##### `AllowPublicAccess`<sup>Optional</sup> <a name="AllowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess"></a>

```go
AllowPublicAccess interface{}
```

- *Type:* interface{}

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#allow_public_access GoogleDiscoveryEngineWidgetConfig#allow_public_access}

---

##### `EnableWebApp`<sup>Optional</sup> <a name="EnableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp"></a>

```go
EnableWebApp interface{}
```

- *Type:* interface{}

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_web_app GoogleDiscoveryEngineWidgetConfig#enable_web_app}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}

---

##### `WorkforceIdentityPoolProvider`<sup>Optional</sup> <a name="WorkforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider"></a>

```go
WorkforceIdentityPoolProvider *string
```

- *Type:* *string

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#workforce_identity_pool_provider GoogleDiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

### GoogleDiscoveryEngineWidgetConfigConfig <a name="GoogleDiscoveryEngineWidgetConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EngineId: *string,
	Location: *string,
	AccessSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings,
	CollectionId: *string,
	HomepageSetting: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts,
	UiBranding: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding,
	UiSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings,
	WidgetConfigId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.engineId">EngineId</a></code> | <code>*string</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.accessSettings">AccessSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.homepageSetting">HomepageSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#id GoogleDiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#project GoogleDiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiBranding">UiBranding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiSettings">UiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.widgetConfigId">WidgetConfigId</a></code> | <code>*string</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#engine_id GoogleDiscoveryEngineWidgetConfig#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#location GoogleDiscoveryEngineWidgetConfig#location}

---

##### `AccessSettings`<sup>Optional</sup> <a name="AccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.accessSettings"></a>

```go
AccessSettings GoogleDiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#access_settings GoogleDiscoveryEngineWidgetConfig#access_settings}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#collection_id GoogleDiscoveryEngineWidgetConfig#collection_id}

---

##### `HomepageSetting`<sup>Optional</sup> <a name="HomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.homepageSetting"></a>

```go
HomepageSetting GoogleDiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#homepage_setting GoogleDiscoveryEngineWidgetConfig#homepage_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#id GoogleDiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#project GoogleDiscoveryEngineWidgetConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.timeouts"></a>

```go
Timeouts GoogleDiscoveryEngineWidgetConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#timeouts GoogleDiscoveryEngineWidgetConfig#timeouts}

---

##### `UiBranding`<sup>Optional</sup> <a name="UiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiBranding"></a>

```go
UiBranding GoogleDiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_branding GoogleDiscoveryEngineWidgetConfig#ui_branding}

---

##### `UiSettings`<sup>Optional</sup> <a name="UiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiSettings"></a>

```go
UiSettings GoogleDiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_settings GoogleDiscoveryEngineWidgetConfig#ui_settings}

---

##### `WidgetConfigId`<sup>Optional</sup> <a name="WidgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.widgetConfigId"></a>

```go
WidgetConfigId *string
```

- *Type:* *string

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#widget_config_id GoogleDiscoveryEngineWidgetConfig#widget_config_id}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSetting <a name="GoogleDiscoveryEngineWidgetConfigHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting {
	Shortcuts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts">Shortcuts</a></code> | <code>interface{}</code> | shortcuts block. |

---

##### `Shortcuts`<sup>Optional</sup> <a name="Shortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts"></a>

```go
Shortcuts interface{}
```

- *Type:* interface{}

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#shortcuts GoogleDiscoveryEngineWidgetConfig#shortcuts}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts {
	DestinationUri: *string,
	Icon: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri">DestinationUri</a></code> | <code>*string</code> | Destination URL of shortcut. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon">Icon</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | icon block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title">Title</a></code> | <code>*string</code> | Title of the shortcut. |

---

##### `DestinationUri`<sup>Optional</sup> <a name="DestinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri"></a>

```go
DestinationUri *string
```

- *Type:* *string

Destination URL of shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#destination_uri GoogleDiscoveryEngineWidgetConfig#destination_uri}

---

##### `Icon`<sup>Optional</sup> <a name="Icon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon"></a>

```go
Icon GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

icon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#icon GoogleDiscoveryEngineWidgetConfig#icon}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title of the shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#title GoogleDiscoveryEngineWidgetConfig#title}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url">Url</a></code> | <code>*string</code> | Image URL. |

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url"></a>

```go
Url *string
```

- *Type:* *string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}

---

### GoogleDiscoveryEngineWidgetConfigTimeouts <a name="GoogleDiscoveryEngineWidgetConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#create GoogleDiscoveryEngineWidgetConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#delete GoogleDiscoveryEngineWidgetConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#update GoogleDiscoveryEngineWidgetConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#create GoogleDiscoveryEngineWidgetConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#delete GoogleDiscoveryEngineWidgetConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#update GoogleDiscoveryEngineWidgetConfig#update}.

---

### GoogleDiscoveryEngineWidgetConfigUiBranding <a name="GoogleDiscoveryEngineWidgetConfigUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiBranding {
	Logo: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.property.logo">Logo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | logo block. |

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.property.logo"></a>

```go
Logo GoogleDiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#logo GoogleDiscoveryEngineWidgetConfig#logo}

---

### GoogleDiscoveryEngineWidgetConfigUiBrandingLogo <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo {
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.property.url">Url</a></code> | <code>*string</code> | Image URL. |

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.property.url"></a>

```go
Url *string
```

- *Type:* *string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}

---

### GoogleDiscoveryEngineWidgetConfigUiSettings <a name="GoogleDiscoveryEngineWidgetConfigUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiSettings {
	DataStoreUiConfigs: interface{},
	DefaultSearchRequestOrderBy: *string,
	DisableUserEventsCollection: interface{},
	EnableAutocomplete: interface{},
	EnableCreateAgentButton: interface{},
	EnablePeopleSearch: interface{},
	EnableQualityFeedback: interface{},
	EnableSafeSearch: interface{},
	EnableSearchAsYouType: interface{},
	EnableVisualContentSummary: interface{},
	GenerativeAnswerConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig,
	InteractionType: *string,
	ResultDescriptionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs">DataStoreUiConfigs</a></code> | <code>interface{}</code> | data_store_ui_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy">DefaultSearchRequestOrderBy</a></code> | <code>*string</code> | The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection">DisableUserEventsCollection</a></code> | <code>interface{}</code> | If set to true, the widget will not collect user events. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete">EnableAutocomplete</a></code> | <code>interface{}</code> | Whether or not to enable autocomplete. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton">EnableCreateAgentButton</a></code> | <code>interface{}</code> | If set to true, the widget will enable the create agent button. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch">EnablePeopleSearch</a></code> | <code>interface{}</code> | If set to true, the widget will enable people search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback">EnableQualityFeedback</a></code> | <code>interface{}</code> | Turn on or off collecting the search result quality feedback from end users. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch">EnableSafeSearch</a></code> | <code>interface{}</code> | Whether to enable safe search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType">EnableSearchAsYouType</a></code> | <code>interface{}</code> | Whether to enable search-as-you-type behavior for the search widget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary">EnableVisualContentSummary</a></code> | <code>interface{}</code> | If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig">GenerativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | generative_answer_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.interactionType">InteractionType</a></code> | <code>*string</code> | Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType">ResultDescriptionType</a></code> | <code>*string</code> | Controls whether result extract is display and how (snippet or extractive answer). |

---

##### `DataStoreUiConfigs`<sup>Optional</sup> <a name="DataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs"></a>

```go
DataStoreUiConfigs interface{}
```

- *Type:* interface{}

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#data_store_ui_configs GoogleDiscoveryEngineWidgetConfig#data_store_ui_configs}

---

##### `DefaultSearchRequestOrderBy`<sup>Optional</sup> <a name="DefaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy"></a>

```go
DefaultSearchRequestOrderBy *string
```

- *Type:* *string

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#default_search_request_order_by GoogleDiscoveryEngineWidgetConfig#default_search_request_order_by}

---

##### `DisableUserEventsCollection`<sup>Optional</sup> <a name="DisableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection"></a>

```go
DisableUserEventsCollection interface{}
```

- *Type:* interface{}

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#disable_user_events_collection GoogleDiscoveryEngineWidgetConfig#disable_user_events_collection}

---

##### `EnableAutocomplete`<sup>Optional</sup> <a name="EnableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete"></a>

```go
EnableAutocomplete interface{}
```

- *Type:* interface{}

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_autocomplete GoogleDiscoveryEngineWidgetConfig#enable_autocomplete}

---

##### `EnableCreateAgentButton`<sup>Optional</sup> <a name="EnableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton"></a>

```go
EnableCreateAgentButton interface{}
```

- *Type:* interface{}

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_create_agent_button GoogleDiscoveryEngineWidgetConfig#enable_create_agent_button}

---

##### `EnablePeopleSearch`<sup>Optional</sup> <a name="EnablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch"></a>

```go
EnablePeopleSearch interface{}
```

- *Type:* interface{}

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_people_search GoogleDiscoveryEngineWidgetConfig#enable_people_search}

---

##### `EnableQualityFeedback`<sup>Optional</sup> <a name="EnableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback"></a>

```go
EnableQualityFeedback interface{}
```

- *Type:* interface{}

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_quality_feedback GoogleDiscoveryEngineWidgetConfig#enable_quality_feedback}

---

##### `EnableSafeSearch`<sup>Optional</sup> <a name="EnableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch"></a>

```go
EnableSafeSearch interface{}
```

- *Type:* interface{}

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_safe_search GoogleDiscoveryEngineWidgetConfig#enable_safe_search}

---

##### `EnableSearchAsYouType`<sup>Optional</sup> <a name="EnableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType"></a>

```go
EnableSearchAsYouType interface{}
```

- *Type:* interface{}

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_search_as_you_type GoogleDiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

##### `EnableVisualContentSummary`<sup>Optional</sup> <a name="EnableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary"></a>

```go
EnableVisualContentSummary interface{}
```

- *Type:* interface{}

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#enable_visual_content_summary GoogleDiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

##### `GenerativeAnswerConfig`<sup>Optional</sup> <a name="GenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig"></a>

```go
GenerativeAnswerConfig GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#generative_answer_config GoogleDiscoveryEngineWidgetConfig#generative_answer_config}

---

##### `InteractionType`<sup>Optional</sup> <a name="InteractionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.interactionType"></a>

```go
InteractionType *string
```

- *Type:* *string

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#interaction_type GoogleDiscoveryEngineWidgetConfig#interaction_type}

---

##### `ResultDescriptionType`<sup>Optional</sup> <a name="ResultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType"></a>

```go
ResultDescriptionType *string
```

- *Type:* *string

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#result_description_type GoogleDiscoveryEngineWidgetConfig#result_description_type}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs {
	FacetField: interface{},
	FieldsUiComponentsMap: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField">FacetField</a></code> | <code>interface{}</code> | facet_field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap">FieldsUiComponentsMap</a></code> | <code>interface{}</code> | fields_ui_components_map block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name">Name</a></code> | <code>*string</code> | The name of the data store. |

---

##### `FacetField`<sup>Optional</sup> <a name="FacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField"></a>

```go
FacetField interface{}
```

- *Type:* interface{}

facet_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#facet_field GoogleDiscoveryEngineWidgetConfig#facet_field}

---

##### `FieldsUiComponentsMap`<sup>Optional</sup> <a name="FieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap"></a>

```go
FieldsUiComponentsMap interface{}
```

- *Type:* interface{}

fields_ui_components_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#fields_ui_components_map GoogleDiscoveryEngineWidgetConfig#fields_ui_components_map}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the data store.

It should be data store resource name. Format:
'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
the project number and location part is erased in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#name GoogleDiscoveryEngineWidgetConfig#name}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField {
	Field: *string,
	DisplayName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field">Field</a></code> | <code>*string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName">DisplayName</a></code> | <code>*string</code> | The field name that end users will see. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field"></a>

```go
Field *string
```

- *Type:* *string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The field name that end users will see.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#display_name GoogleDiscoveryEngineWidgetConfig#display_name}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap {
	Field: *string,
	UiComponent: *string,
	DeviceVisibility: *[]*string,
	DisplayTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field">Field</a></code> | <code>*string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent">UiComponent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_component GoogleDiscoveryEngineWidgetConfig#ui_component}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility">DeviceVisibility</a></code> | <code>*[]*string</code> | Possible values: ["MOBILE", "DESKTOP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate">DisplayTemplate</a></code> | <code>*string</code> | The template to customize how the field is displayed. |

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field"></a>

```go
Field *string
```

- *Type:* *string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}

---

##### `UiComponent`<sup>Required</sup> <a name="UiComponent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent"></a>

```go
UiComponent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ui_component GoogleDiscoveryEngineWidgetConfig#ui_component}.

---

##### `DeviceVisibility`<sup>Optional</sup> <a name="DeviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility"></a>

```go
DeviceVisibility *[]*string
```

- *Type:* *[]*string

Possible values: ["MOBILE", "DESKTOP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#device_visibility GoogleDiscoveryEngineWidgetConfig#device_visibility}

---

##### `DisplayTemplate`<sup>Optional</sup> <a name="DisplayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate"></a>

```go
DisplayTemplate *string
```

- *Type:* *string

The template to customize how the field is displayed.

An example value would be a string that looks like: "Price: {value}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#display_template GoogleDiscoveryEngineWidgetConfig#display_template}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

&googlediscoveryenginewidgetconfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig {
	DisableRelatedQuestions: interface{},
	IgnoreAdversarialQuery: interface{},
	IgnoreLowRelevantContent: interface{},
	IgnoreNonAnswerSeekingQuery: interface{},
	ImageSource: *string,
	LanguageCode: *string,
	MaxRephraseSteps: *f64,
	ModelPromptPreamble: *string,
	ModelVersion: *string,
	ResultCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions">DisableRelatedQuestions</a></code> | <code>interface{}</code> | Whether generated answer contains suggested related questions. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery">IgnoreAdversarialQuery</a></code> | <code>interface{}</code> | Specifies whether to filter out queries that are adversarial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent">IgnoreLowRelevantContent</a></code> | <code>interface{}</code> | Specifies whether to filter out queries that are not relevant to the content. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery">IgnoreNonAnswerSeekingQuery</a></code> | <code>interface{}</code> | Specifies whether to filter out queries that are not answer-seeking. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource">ImageSource</a></code> | <code>*string</code> | Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps">MaxRephraseSteps</a></code> | <code>*f64</code> | Max rephrase steps. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble">ModelPromptPreamble</a></code> | <code>*string</code> | Text at the beginning of the prompt that instructs the model that generates the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | The model version used to generate the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount">ResultCount</a></code> | <code>*f64</code> | The number of top results to generate the answer from. Up to 10. |

---

##### `DisableRelatedQuestions`<sup>Optional</sup> <a name="DisableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions"></a>

```go
DisableRelatedQuestions interface{}
```

- *Type:* interface{}

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#disable_related_questions GoogleDiscoveryEngineWidgetConfig#disable_related_questions}

---

##### `IgnoreAdversarialQuery`<sup>Optional</sup> <a name="IgnoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery"></a>

```go
IgnoreAdversarialQuery interface{}
```

- *Type:* interface{}

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_adversarial_query GoogleDiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

##### `IgnoreLowRelevantContent`<sup>Optional</sup> <a name="IgnoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent"></a>

```go
IgnoreLowRelevantContent interface{}
```

- *Type:* interface{}

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_low_relevant_content GoogleDiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

##### `IgnoreNonAnswerSeekingQuery`<sup>Optional</sup> <a name="IgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery"></a>

```go
IgnoreNonAnswerSeekingQuery interface{}
```

- *Type:* interface{}

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#ignore_non_answer_seeking_query GoogleDiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

##### `ImageSource`<sup>Optional</sup> <a name="ImageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource"></a>

```go
ImageSource *string
```

- *Type:* *string

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#image_source GoogleDiscoveryEngineWidgetConfig#image_source}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}

---

##### `MaxRephraseSteps`<sup>Optional</sup> <a name="MaxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps"></a>

```go
MaxRephraseSteps *f64
```

- *Type:* *f64

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#max_rephrase_steps GoogleDiscoveryEngineWidgetConfig#max_rephrase_steps}

---

##### `ModelPromptPreamble`<sup>Optional</sup> <a name="ModelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble"></a>

```go
ModelPromptPreamble *string
```

- *Type:* *string

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#model_prompt_preamble GoogleDiscoveryEngineWidgetConfig#model_prompt_preamble}

---

##### `ModelVersion`<sup>Optional</sup> <a name="ModelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion"></a>

```go
ModelVersion *string
```

- *Type:* *string

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#model_version GoogleDiscoveryEngineWidgetConfig#model_version}

---

##### `ResultCount`<sup>Optional</sup> <a name="ResultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount"></a>

```go
ResultCount *f64
```

- *Type:* *f64

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_widget_config#result_count GoogleDiscoveryEngineWidgetConfig#result_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains">ResetAllowlistedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess">ResetAllowPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp">ResetEnableWebApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider">ResetWorkforceIdentityPoolProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowlistedDomains` <a name="ResetAllowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains"></a>

```go
func ResetAllowlistedDomains()
```

##### `ResetAllowPublicAccess` <a name="ResetAllowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess"></a>

```go
func ResetAllowPublicAccess()
```

##### `ResetEnableWebApp` <a name="ResetEnableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp"></a>

```go
func ResetEnableWebApp()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetWorkforceIdentityPoolProvider` <a name="ResetWorkforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider"></a>

```go
func ResetWorkforceIdentityPoolProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput">AllowlistedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput">AllowPublicAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput">EnableWebAppInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput">WorkforceIdentityPoolProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains">AllowlistedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess">AllowPublicAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp">EnableWebApp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider">WorkforceIdentityPoolProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowlistedDomainsInput`<sup>Optional</sup> <a name="AllowlistedDomainsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput"></a>

```go
func AllowlistedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowPublicAccessInput`<sup>Optional</sup> <a name="AllowPublicAccessInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput"></a>

```go
func AllowPublicAccessInput() interface{}
```

- *Type:* interface{}

---

##### `EnableWebAppInput`<sup>Optional</sup> <a name="EnableWebAppInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput"></a>

```go
func EnableWebAppInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `WorkforceIdentityPoolProviderInput`<sup>Optional</sup> <a name="WorkforceIdentityPoolProviderInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput"></a>

```go
func WorkforceIdentityPoolProviderInput() *string
```

- *Type:* *string

---

##### `AllowlistedDomains`<sup>Required</sup> <a name="AllowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains"></a>

```go
func AllowlistedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AllowPublicAccess`<sup>Required</sup> <a name="AllowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess"></a>

```go
func AllowPublicAccess() interface{}
```

- *Type:* interface{}

---

##### `EnableWebApp`<sup>Required</sup> <a name="EnableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp"></a>

```go
func EnableWebApp() interface{}
```

- *Type:* interface{}

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `WorkforceIdentityPoolProvider`<sup>Required</sup> <a name="WorkforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider"></a>

```go
func WorkforceIdentityPoolProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigAccessSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts">PutShortcuts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts">ResetShortcuts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShortcuts` <a name="PutShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts"></a>

```go
func PutShortcuts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetShortcuts` <a name="ResetShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts"></a>

```go
func ResetShortcuts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts">Shortcuts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput">ShortcutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Shortcuts`<sup>Required</sup> <a name="Shortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts"></a>

```go
func Shortcuts() GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a>

---

##### `ShortcutsInput`<sup>Optional</sup> <a name="ShortcutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput"></a>

```go
func ShortcutsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigHomepageSetting
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon">PutIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri">ResetDestinationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon">ResetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcon` <a name="PutIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon"></a>

```go
func PutIcon(value GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `ResetDestinationUri` <a name="ResetDestinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri"></a>

```go
func ResetDestinationUri()
```

##### `ResetIcon` <a name="ResetIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon"></a>

```go
func ResetIcon()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon">Icon</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput">DestinationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput">IconInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri">DestinationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon"></a>

```go
func Icon() GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a>

---

##### `DestinationUriInput`<sup>Optional</sup> <a name="DestinationUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput"></a>

```go
func DestinationUriInput() *string
```

- *Type:* *string

---

##### `IconInput`<sup>Optional</sup> <a name="IconInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput"></a>

```go
func IconInput() GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `DestinationUri`<sup>Required</sup> <a name="DestinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri"></a>

```go
func DestinationUri() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---


### GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo">PutLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo">ResetLogo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogo` <a name="PutLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo"></a>

```go
func PutLogo(value GoogleDiscoveryEngineWidgetConfigUiBrandingLogo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `ResetLogo` <a name="ResetLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo"></a>

```go
func ResetLogo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo">Logo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput">LogoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo"></a>

```go
func Logo() GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a>

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput"></a>

```go
func LogoInput() GoogleDiscoveryEngineWidgetConfigUiBrandingLogo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigUiBranding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility">ResetDeviceVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate">ResetDisplayTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceVisibility` <a name="ResetDeviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility"></a>

```go
func ResetDeviceVisibility()
```

##### `ResetDisplayTemplate` <a name="ResetDisplayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate"></a>

```go
func ResetDisplayTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput">DeviceVisibilityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput">DisplayTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput">UiComponentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility">DeviceVisibility</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate">DisplayTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent">UiComponent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceVisibilityInput`<sup>Optional</sup> <a name="DeviceVisibilityInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput"></a>

```go
func DeviceVisibilityInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayTemplateInput`<sup>Optional</sup> <a name="DisplayTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput"></a>

```go
func DisplayTemplateInput() *string
```

- *Type:* *string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `UiComponentInput`<sup>Optional</sup> <a name="UiComponentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput"></a>

```go
func UiComponentInput() *string
```

- *Type:* *string

---

##### `DeviceVisibility`<sup>Required</sup> <a name="DeviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility"></a>

```go
func DeviceVisibility() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayTemplate`<sup>Required</sup> <a name="DisplayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate"></a>

```go
func DisplayTemplate() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `UiComponent`<sup>Required</sup> <a name="UiComponent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent"></a>

```go
func UiComponent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField">PutFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap">PutFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField">ResetFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap">ResetFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFacetField` <a name="PutFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField"></a>

```go
func PutFacetField(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFieldsUiComponentsMap` <a name="PutFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap"></a>

```go
func PutFieldsUiComponentsMap(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFacetField` <a name="ResetFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField"></a>

```go
func ResetFacetField()
```

##### `ResetFieldsUiComponentsMap` <a name="ResetFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap"></a>

```go
func ResetFieldsUiComponentsMap()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField">FacetField</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap">FieldsUiComponentsMap</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput">FacetFieldInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput">FieldsUiComponentsMapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FacetField`<sup>Required</sup> <a name="FacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField"></a>

```go
func FacetField() GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a>

---

##### `FieldsUiComponentsMap`<sup>Required</sup> <a name="FieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap"></a>

```go
func FieldsUiComponentsMap() GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a>

---

##### `FacetFieldInput`<sup>Optional</sup> <a name="FacetFieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput"></a>

```go
func FacetFieldInput() interface{}
```

- *Type:* interface{}

---

##### `FieldsUiComponentsMapInput`<sup>Optional</sup> <a name="FieldsUiComponentsMapInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput"></a>

```go
func FieldsUiComponentsMapInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions">ResetDisableRelatedQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery">ResetIgnoreAdversarialQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent">ResetIgnoreLowRelevantContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery">ResetIgnoreNonAnswerSeekingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource">ResetImageSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps">ResetMaxRephraseSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble">ResetModelPromptPreamble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion">ResetModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount">ResetResultCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableRelatedQuestions` <a name="ResetDisableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions"></a>

```go
func ResetDisableRelatedQuestions()
```

##### `ResetIgnoreAdversarialQuery` <a name="ResetIgnoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery"></a>

```go
func ResetIgnoreAdversarialQuery()
```

##### `ResetIgnoreLowRelevantContent` <a name="ResetIgnoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent"></a>

```go
func ResetIgnoreLowRelevantContent()
```

##### `ResetIgnoreNonAnswerSeekingQuery` <a name="ResetIgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery"></a>

```go
func ResetIgnoreNonAnswerSeekingQuery()
```

##### `ResetImageSource` <a name="ResetImageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource"></a>

```go
func ResetImageSource()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetMaxRephraseSteps` <a name="ResetMaxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps"></a>

```go
func ResetMaxRephraseSteps()
```

##### `ResetModelPromptPreamble` <a name="ResetModelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble"></a>

```go
func ResetModelPromptPreamble()
```

##### `ResetModelVersion` <a name="ResetModelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion"></a>

```go
func ResetModelVersion()
```

##### `ResetResultCount` <a name="ResetResultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount"></a>

```go
func ResetResultCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput">DisableRelatedQuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput">IgnoreAdversarialQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput">IgnoreLowRelevantContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput">IgnoreNonAnswerSeekingQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput">ImageSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput">MaxRephraseStepsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput">ModelPromptPreambleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput">ModelVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput">ResultCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions">DisableRelatedQuestions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery">IgnoreAdversarialQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent">IgnoreLowRelevantContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery">IgnoreNonAnswerSeekingQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource">ImageSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps">MaxRephraseSteps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble">ModelPromptPreamble</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount">ResultCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableRelatedQuestionsInput`<sup>Optional</sup> <a name="DisableRelatedQuestionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput"></a>

```go
func DisableRelatedQuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreAdversarialQueryInput`<sup>Optional</sup> <a name="IgnoreAdversarialQueryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput"></a>

```go
func IgnoreAdversarialQueryInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreLowRelevantContentInput`<sup>Optional</sup> <a name="IgnoreLowRelevantContentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput"></a>

```go
func IgnoreLowRelevantContentInput() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNonAnswerSeekingQueryInput`<sup>Optional</sup> <a name="IgnoreNonAnswerSeekingQueryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput"></a>

```go
func IgnoreNonAnswerSeekingQueryInput() interface{}
```

- *Type:* interface{}

---

##### `ImageSourceInput`<sup>Optional</sup> <a name="ImageSourceInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput"></a>

```go
func ImageSourceInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `MaxRephraseStepsInput`<sup>Optional</sup> <a name="MaxRephraseStepsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput"></a>

```go
func MaxRephraseStepsInput() *f64
```

- *Type:* *f64

---

##### `ModelPromptPreambleInput`<sup>Optional</sup> <a name="ModelPromptPreambleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput"></a>

```go
func ModelPromptPreambleInput() *string
```

- *Type:* *string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput"></a>

```go
func ModelVersionInput() *string
```

- *Type:* *string

---

##### `ResultCountInput`<sup>Optional</sup> <a name="ResultCountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput"></a>

```go
func ResultCountInput() *f64
```

- *Type:* *f64

---

##### `DisableRelatedQuestions`<sup>Required</sup> <a name="DisableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions"></a>

```go
func DisableRelatedQuestions() interface{}
```

- *Type:* interface{}

---

##### `IgnoreAdversarialQuery`<sup>Required</sup> <a name="IgnoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery"></a>

```go
func IgnoreAdversarialQuery() interface{}
```

- *Type:* interface{}

---

##### `IgnoreLowRelevantContent`<sup>Required</sup> <a name="IgnoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent"></a>

```go
func IgnoreLowRelevantContent() interface{}
```

- *Type:* interface{}

---

##### `IgnoreNonAnswerSeekingQuery`<sup>Required</sup> <a name="IgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery"></a>

```go
func IgnoreNonAnswerSeekingQuery() interface{}
```

- *Type:* interface{}

---

##### `ImageSource`<sup>Required</sup> <a name="ImageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource"></a>

```go
func ImageSource() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `MaxRephraseSteps`<sup>Required</sup> <a name="MaxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps"></a>

```go
func MaxRephraseSteps() *f64
```

- *Type:* *f64

---

##### `ModelPromptPreamble`<sup>Required</sup> <a name="ModelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble"></a>

```go
func ModelPromptPreamble() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `ResultCount`<sup>Required</sup> <a name="ResultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount"></a>

```go
func ResultCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginewidgetconfig"

googlediscoveryenginewidgetconfig.NewGoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs">PutDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig">PutGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs">ResetDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy">ResetDefaultSearchRequestOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection">ResetDisableUserEventsCollection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete">ResetEnableAutocomplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton">ResetEnableCreateAgentButton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch">ResetEnablePeopleSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback">ResetEnableQualityFeedback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch">ResetEnableSafeSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType">ResetEnableSearchAsYouType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary">ResetEnableVisualContentSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig">ResetGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType">ResetInteractionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType">ResetResultDescriptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStoreUiConfigs` <a name="PutDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs"></a>

```go
func PutDataStoreUiConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGenerativeAnswerConfig` <a name="PutGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig"></a>

```go
func PutGenerativeAnswerConfig(value GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `ResetDataStoreUiConfigs` <a name="ResetDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs"></a>

```go
func ResetDataStoreUiConfigs()
```

##### `ResetDefaultSearchRequestOrderBy` <a name="ResetDefaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy"></a>

```go
func ResetDefaultSearchRequestOrderBy()
```

##### `ResetDisableUserEventsCollection` <a name="ResetDisableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection"></a>

```go
func ResetDisableUserEventsCollection()
```

##### `ResetEnableAutocomplete` <a name="ResetEnableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete"></a>

```go
func ResetEnableAutocomplete()
```

##### `ResetEnableCreateAgentButton` <a name="ResetEnableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton"></a>

```go
func ResetEnableCreateAgentButton()
```

##### `ResetEnablePeopleSearch` <a name="ResetEnablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch"></a>

```go
func ResetEnablePeopleSearch()
```

##### `ResetEnableQualityFeedback` <a name="ResetEnableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback"></a>

```go
func ResetEnableQualityFeedback()
```

##### `ResetEnableSafeSearch` <a name="ResetEnableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch"></a>

```go
func ResetEnableSafeSearch()
```

##### `ResetEnableSearchAsYouType` <a name="ResetEnableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType"></a>

```go
func ResetEnableSearchAsYouType()
```

##### `ResetEnableVisualContentSummary` <a name="ResetEnableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary"></a>

```go
func ResetEnableVisualContentSummary()
```

##### `ResetGenerativeAnswerConfig` <a name="ResetGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig"></a>

```go
func ResetGenerativeAnswerConfig()
```

##### `ResetInteractionType` <a name="ResetInteractionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType"></a>

```go
func ResetInteractionType()
```

##### `ResetResultDescriptionType` <a name="ResetResultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType"></a>

```go
func ResetResultDescriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs">DataStoreUiConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig">GenerativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput">DataStoreUiConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput">DefaultSearchRequestOrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput">DisableUserEventsCollectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput">EnableAutocompleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput">EnableCreateAgentButtonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput">EnablePeopleSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput">EnableQualityFeedbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput">EnableSafeSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput">EnableSearchAsYouTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput">EnableVisualContentSummaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput">GenerativeAnswerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput">InteractionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput">ResultDescriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy">DefaultSearchRequestOrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection">DisableUserEventsCollection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete">EnableAutocomplete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton">EnableCreateAgentButton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch">EnablePeopleSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback">EnableQualityFeedback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch">EnableSafeSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType">EnableSearchAsYouType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary">EnableVisualContentSummary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType">InteractionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType">ResultDescriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreUiConfigs`<sup>Required</sup> <a name="DataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs"></a>

```go
func DataStoreUiConfigs() GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a>

---

##### `GenerativeAnswerConfig`<sup>Required</sup> <a name="GenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig"></a>

```go
func GenerativeAnswerConfig() GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a>

---

##### `DataStoreUiConfigsInput`<sup>Optional</sup> <a name="DataStoreUiConfigsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput"></a>

```go
func DataStoreUiConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultSearchRequestOrderByInput`<sup>Optional</sup> <a name="DefaultSearchRequestOrderByInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput"></a>

```go
func DefaultSearchRequestOrderByInput() *string
```

- *Type:* *string

---

##### `DisableUserEventsCollectionInput`<sup>Optional</sup> <a name="DisableUserEventsCollectionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput"></a>

```go
func DisableUserEventsCollectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutocompleteInput`<sup>Optional</sup> <a name="EnableAutocompleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput"></a>

```go
func EnableAutocompleteInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCreateAgentButtonInput`<sup>Optional</sup> <a name="EnableCreateAgentButtonInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput"></a>

```go
func EnableCreateAgentButtonInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePeopleSearchInput`<sup>Optional</sup> <a name="EnablePeopleSearchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput"></a>

```go
func EnablePeopleSearchInput() interface{}
```

- *Type:* interface{}

---

##### `EnableQualityFeedbackInput`<sup>Optional</sup> <a name="EnableQualityFeedbackInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput"></a>

```go
func EnableQualityFeedbackInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSafeSearchInput`<sup>Optional</sup> <a name="EnableSafeSearchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput"></a>

```go
func EnableSafeSearchInput() interface{}
```

- *Type:* interface{}

---

##### `EnableSearchAsYouTypeInput`<sup>Optional</sup> <a name="EnableSearchAsYouTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput"></a>

```go
func EnableSearchAsYouTypeInput() interface{}
```

- *Type:* interface{}

---

##### `EnableVisualContentSummaryInput`<sup>Optional</sup> <a name="EnableVisualContentSummaryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput"></a>

```go
func EnableVisualContentSummaryInput() interface{}
```

- *Type:* interface{}

---

##### `GenerativeAnswerConfigInput`<sup>Optional</sup> <a name="GenerativeAnswerConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput"></a>

```go
func GenerativeAnswerConfigInput() GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `InteractionTypeInput`<sup>Optional</sup> <a name="InteractionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput"></a>

```go
func InteractionTypeInput() *string
```

- *Type:* *string

---

##### `ResultDescriptionTypeInput`<sup>Optional</sup> <a name="ResultDescriptionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput"></a>

```go
func ResultDescriptionTypeInput() *string
```

- *Type:* *string

---

##### `DefaultSearchRequestOrderBy`<sup>Required</sup> <a name="DefaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy"></a>

```go
func DefaultSearchRequestOrderBy() *string
```

- *Type:* *string

---

##### `DisableUserEventsCollection`<sup>Required</sup> <a name="DisableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection"></a>

```go
func DisableUserEventsCollection() interface{}
```

- *Type:* interface{}

---

##### `EnableAutocomplete`<sup>Required</sup> <a name="EnableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete"></a>

```go
func EnableAutocomplete() interface{}
```

- *Type:* interface{}

---

##### `EnableCreateAgentButton`<sup>Required</sup> <a name="EnableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton"></a>

```go
func EnableCreateAgentButton() interface{}
```

- *Type:* interface{}

---

##### `EnablePeopleSearch`<sup>Required</sup> <a name="EnablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch"></a>

```go
func EnablePeopleSearch() interface{}
```

- *Type:* interface{}

---

##### `EnableQualityFeedback`<sup>Required</sup> <a name="EnableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback"></a>

```go
func EnableQualityFeedback() interface{}
```

- *Type:* interface{}

---

##### `EnableSafeSearch`<sup>Required</sup> <a name="EnableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch"></a>

```go
func EnableSafeSearch() interface{}
```

- *Type:* interface{}

---

##### `EnableSearchAsYouType`<sup>Required</sup> <a name="EnableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType"></a>

```go
func EnableSearchAsYouType() interface{}
```

- *Type:* interface{}

---

##### `EnableVisualContentSummary`<sup>Required</sup> <a name="EnableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary"></a>

```go
func EnableVisualContentSummary() interface{}
```

- *Type:* interface{}

---

##### `InteractionType`<sup>Required</sup> <a name="InteractionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType"></a>

```go
func InteractionType() *string
```

- *Type:* *string

---

##### `ResultDescriptionType`<sup>Required</sup> <a name="ResultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType"></a>

```go
func ResultDescriptionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineWidgetConfigUiSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---



