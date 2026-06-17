# `googleDiscoveryEngineAclConfig` Submodule <a name="`googleDiscoveryEngineAclConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAclConfig <a name="GoogleDiscoveryEngineAclConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config google_discovery_engine_acl_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfig(Construct Scope, string Id, GoogleDiscoveryEngineAclConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig">GoogleDiscoveryEngineAclConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig">GoogleDiscoveryEngineAclConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig">ResetIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig"></a>

```csharp
private void PutIdpConfig(GoogleDiscoveryEngineAclConfigIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineAclConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpConfig` <a name="ResetIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig"></a>

```csharp
private void ResetIdpConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineAclConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineAclConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineAclConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineAclConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineAclConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineAclConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAclConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfigOutputReference IdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineAclConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfig IdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineAclConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAclConfigConfig <a name="GoogleDiscoveryEngineAclConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    GoogleDiscoveryEngineAclConfigIdpConfig IdpConfig = null,
    string Project = null,
    GoogleDiscoveryEngineAclConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#location GoogleDiscoveryEngineAclConfig#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpConfig`<sup>Optional</sup> <a name="IdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfig IdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#idp_config GoogleDiscoveryEngineAclConfig#idp_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineAclConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#timeouts GoogleDiscoveryEngineAclConfig#timeouts}

---

### GoogleDiscoveryEngineAclConfigIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigIdpConfig {
    GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig ExternalIdpConfig = null,
    string IdpType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig">ExternalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | external_idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType">IdpType</a></code> | <code>string</code> | Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]. |

---

##### `ExternalIdpConfig`<sup>Optional</sup> <a name="ExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig ExternalIdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

external_idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#external_idp_config GoogleDiscoveryEngineAclConfig#external_idp_config}

---

##### `IdpType`<sup>Optional</sup> <a name="IdpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType"></a>

```csharp
public string IdpType { get; set; }
```

- *Type:* string

Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#idp_type GoogleDiscoveryEngineAclConfig#idp_type}

---

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig {
    string WorkforcePoolName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName">WorkforcePoolName</a></code> | <code>string</code> | Workforce pool name: "locations/global/workforcePools/pool_id". |

---

##### `WorkforcePoolName`<sup>Optional</sup> <a name="WorkforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName"></a>

```csharp
public string WorkforcePoolName { get; set; }
```

- *Type:* string

Workforce pool name: "locations/global/workforcePools/pool_id".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#workforce_pool_name GoogleDiscoveryEngineAclConfig#workforce_pool_name}

---

### GoogleDiscoveryEngineAclConfigTimeouts <a name="GoogleDiscoveryEngineAclConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName">ResetWorkforcePoolName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkforcePoolName` <a name="ResetWorkforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName"></a>

```csharp
private void ResetWorkforcePoolName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput">WorkforcePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName">WorkforcePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkforcePoolNameInput`<sup>Optional</sup> <a name="WorkforcePoolNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput"></a>

```csharp
public string WorkforcePoolNameInput { get; }
```

- *Type:* string

---

##### `WorkforcePoolName`<sup>Required</sup> <a name="WorkforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName"></a>

```csharp
public string WorkforcePoolName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig">PutExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig">ResetExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType">ResetIdpType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalIdpConfig` <a name="PutExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig"></a>

```csharp
private void PutExternalIdpConfig(GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `ResetExternalIdpConfig` <a name="ResetExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig"></a>

```csharp
private void ResetExternalIdpConfig()
```

##### `ResetIdpType` <a name="ResetIdpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType"></a>

```csharp
private void ResetIdpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig">ExternalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput">ExternalIdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput">IdpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType">IdpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdpConfig`<sup>Required</sup> <a name="ExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference ExternalIdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a>

---

##### `ExternalIdpConfigInput`<sup>Optional</sup> <a name="ExternalIdpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig ExternalIdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `IdpTypeInput`<sup>Optional</sup> <a name="IdpTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput"></a>

```csharp
public string IdpTypeInput { get; }
```

- *Type:* string

---

##### `IdpType`<sup>Required</sup> <a name="IdpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType"></a>

```csharp
public string IdpType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineAclConfigIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineAclConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineAclConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineAclConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---



