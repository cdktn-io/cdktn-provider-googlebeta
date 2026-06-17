# `googleBeyondcorpSecurityGateway` Submodule <a name="`googleBeyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpSecurityGateway <a name="GoogleBeyondcorpSecurityGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGateway(Construct Scope, string Id, GoogleBeyondcorpSecurityGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig">GoogleBeyondcorpSecurityGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig">GoogleBeyondcorpSecurityGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs">PutHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig">PutProxyProtocolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery">PutServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs">ResetHubs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProxyProtocolConfig">ResetProxyProtocolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetServiceDiscovery">ResetServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHubs` <a name="PutHubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs"></a>

```csharp
private void PutHubs(IResolvable|GoogleBeyondcorpSecurityGatewayHubs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putHubs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putLogging"></a>

```csharp
private void PutLogging(GoogleBeyondcorpSecurityGatewayLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

---

##### `PutProxyProtocolConfig` <a name="PutProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig"></a>

```csharp
private void PutProxyProtocolConfig(GoogleBeyondcorpSecurityGatewayProxyProtocolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putProxyProtocolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---

##### `PutServiceDiscovery` <a name="PutServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery"></a>

```csharp
private void PutServiceDiscovery(GoogleBeyondcorpSecurityGatewayServiceDiscovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putServiceDiscovery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBeyondcorpSecurityGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetHubs` <a name="ResetHubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetHubs"></a>

```csharp
private void ResetHubs()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyProtocolConfig` <a name="ResetProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetProxyProtocolConfig"></a>

```csharp
private void ResetProxyProtocolConfig()
```

##### `ResetServiceDiscovery` <a name="ResetServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetServiceDiscovery"></a>

```csharp
private void ResetServiceDiscovery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBeyondcorpSecurityGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBeyondcorpSecurityGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount">DelegatingServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps">ExternalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs">Hubs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference">GoogleBeyondcorpSecurityGatewayLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig">ProxyProtocolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscovery">ServiceDiscovery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput">HubsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfigInput">ProxyProtocolConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscoveryInput">ServiceDiscoveryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DelegatingServiceAccount`<sup>Required</sup> <a name="DelegatingServiceAccount" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```csharp
public string DelegatingServiceAccount { get; }
```

- *Type:* string

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```csharp
public string[] ExternalIps { get; }
```

- *Type:* string[]

---

##### `Hubs`<sup>Required</sup> <a name="Hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubs"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayHubsList Hubs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList">GoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.logging"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference">GoogleBeyondcorpSecurityGatewayLoggingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProxyProtocolConfig`<sup>Required</sup> <a name="ProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference ProxyProtocolConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference</a>

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference ServiceDiscovery { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeouts"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference">GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `HubsInput`<sup>Optional</sup> <a name="HubsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.hubsInput"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayHubs[] HubsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.loggingInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyProtocolConfigInput`<sup>Optional</sup> <a name="ProxyProtocolConfigInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.proxyProtocolConfigInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfig ProxyProtocolConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `ServiceDiscoveryInput`<sup>Optional</sup> <a name="ServiceDiscoveryInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.serviceDiscoveryInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscovery ServiceDiscoveryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpSecurityGatewayConfig <a name="GoogleBeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecurityGatewayId,
    string DeletionPolicy = null,
    string DisplayName = null,
    IResolvable|GoogleBeyondcorpSecurityGatewayHubs[] Hubs = null,
    string Id = null,
    string Location = null,
    GoogleBeyondcorpSecurityGatewayLogging Logging = null,
    string Project = null,
    GoogleBeyondcorpSecurityGatewayProxyProtocolConfig ProxyProtocolConfig = null,
    GoogleBeyondcorpSecurityGatewayServiceDiscovery ServiceDiscovery = null,
    GoogleBeyondcorpSecurityGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs">Hubs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]</code> | hubs block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | logging block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig">ProxyProtocolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | proxy_protocol_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.serviceDiscovery">ServiceDiscovery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#security_gateway_id GoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#deletion_policy GoogleBeyondcorpSecurityGateway#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. An arbitrary user-provided name for the SecurityGateway. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#display_name GoogleBeyondcorpSecurityGateway#display_name}

---

##### `Hubs`<sup>Optional</sup> <a name="Hubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.hubs"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayHubs[] Hubs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]

hubs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#hubs GoogleBeyondcorpSecurityGateway#hubs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#id GoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. Must be omitted or set to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#location GoogleBeyondcorpSecurityGateway#location}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.logging"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#logging GoogleBeyondcorpSecurityGateway#logging}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#project GoogleBeyondcorpSecurityGateway#project}.

---

##### `ProxyProtocolConfig`<sup>Optional</sup> <a name="ProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.proxyProtocolConfig"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfig ProxyProtocolConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

proxy_protocol_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#proxy_protocol_config GoogleBeyondcorpSecurityGateway#proxy_protocol_config}

---

##### `ServiceDiscovery`<sup>Optional</sup> <a name="ServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.serviceDiscovery"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscovery ServiceDiscovery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#service_discovery GoogleBeyondcorpSecurityGateway#service_discovery}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayConfig.property.timeouts"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#timeouts GoogleBeyondcorpSecurityGateway#timeouts}

---

### GoogleBeyondcorpSecurityGatewayHubs <a name="GoogleBeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayHubs {
    string Region,
    GoogleBeyondcorpSecurityGatewayHubsInternetGateway InternetGateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | internet_gateway block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#region GoogleBeyondcorpSecurityGateway#region}.

---

##### `InternetGateway`<sup>Optional</sup> <a name="InternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs.property.internetGateway"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayHubsInternetGateway InternetGateway { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

internet_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#internet_gateway GoogleBeyondcorpSecurityGateway#internet_gateway}

---

### GoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayHubsInternetGateway {

};
```


### GoogleBeyondcorpSecurityGatewayLogging <a name="GoogleBeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayLogging {

};
```


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfig <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfig {
    string[] AllowedClientHeaders = null,
    bool|IResolvable ClientIp = null,
    GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders ContextualHeaders = null,
    string GatewayIdentity = null,
    System.Collections.Generic.IDictionary<string, string> MetadataHeaders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders">AllowedClientHeaders</a></code> | <code>string[]</code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp">ClientIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders">ContextualHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity">GatewayIdentity</a></code> | <code>string</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders">MetadataHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom resource specific headers along with the values. |

---

##### `AllowedClientHeaders`<sup>Optional</sup> <a name="AllowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.allowedClientHeaders"></a>

```csharp
public string[] AllowedClientHeaders { get; set; }
```

- *Type:* string[]

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#allowed_client_headers GoogleBeyondcorpSecurityGateway#allowed_client_headers}

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.clientIp"></a>

```csharp
public bool|IResolvable ClientIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#client_ip GoogleBeyondcorpSecurityGateway#client_ip}

---

##### `ContextualHeaders`<sup>Optional</sup> <a name="ContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.contextualHeaders"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders ContextualHeaders { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#contextual_headers GoogleBeyondcorpSecurityGateway#contextual_headers}

---

##### `GatewayIdentity`<sup>Optional</sup> <a name="GatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.gatewayIdentity"></a>

```csharp
public string GatewayIdentity { get; set; }
```

- *Type:* string

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#gateway_identity GoogleBeyondcorpSecurityGateway#gateway_identity}

---

##### `MetadataHeaders`<sup>Optional</sup> <a name="MetadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig.property.metadataHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#metadata_headers GoogleBeyondcorpSecurityGateway#metadata_headers}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders {
    GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo DeviceInfo = null,
    GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo GroupInfo = null,
    string OutputType = null,
    GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo UserInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo">DeviceInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo">GroupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType">OutputType</a></code> | <code>string</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo">UserInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `DeviceInfo`<sup>Optional</sup> <a name="DeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.deviceInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo DeviceInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#device_info GoogleBeyondcorpSecurityGateway#device_info}

---

##### `GroupInfo`<sup>Optional</sup> <a name="GroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.groupInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo GroupInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#group_info GoogleBeyondcorpSecurityGateway#group_info}

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

##### `UserInfo`<sup>Optional</sup> <a name="UserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.property.userInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo UserInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#user_info GoogleBeyondcorpSecurityGateway#user_info}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo {
    string OutputType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType">OutputType</a></code> | <code>string</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo {
    string OutputType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType">OutputType</a></code> | <code>string</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo {
    string OutputType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType">OutputType</a></code> | <code>string</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.property.outputType"></a>

```csharp
public string OutputType { get; set; }
```

- *Type:* string

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#output_type GoogleBeyondcorpSecurityGateway#output_type}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscovery <a name="GoogleBeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscovery {
    GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway ApiGateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | api_gateway block. |

---

##### `ApiGateway`<sup>Optional</sup> <a name="ApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery.property.apiGateway"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway ApiGateway { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#api_gateway GoogleBeyondcorpSecurityGateway#api_gateway}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway {
    GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride ResourceOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride">ResourceOverride</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | resource_override block. |

---

##### `ResourceOverride`<sup>Optional</sup> <a name="ResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.property.resourceOverride"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride ResourceOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

resource_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#resource_override GoogleBeyondcorpSecurityGateway#resource_override}

---

### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride {
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path">Path</a></code> | <code>string</code> | Contains uri path fragment where HTTP request is sent. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Contains uri path fragment where HTTP request is sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#path GoogleBeyondcorpSecurityGateway#path}

---

### GoogleBeyondcorpSecurityGatewayTimeouts <a name="GoogleBeyondcorpSecurityGatewayTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#create GoogleBeyondcorpSecurityGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#delete GoogleBeyondcorpSecurityGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_beyondcorp_security_gateway#update GoogleBeyondcorpSecurityGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">AssignedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignedIps`<sup>Required</sup> <a name="AssignedIps" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```csharp
public string[] AssignedIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayHubsInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### GoogleBeyondcorpSecurityGatewayHubsList <a name="GoogleBeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayHubsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```csharp
private GoogleBeyondcorpSecurityGatewayHubsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayHubs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>[]

---


### GoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="GoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayHubsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway">PutInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway">ResetInternetGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternetGateway` <a name="PutInternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway"></a>

```csharp
private void PutInternetGateway(GoogleBeyondcorpSecurityGatewayHubsInternetGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.putInternetGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `ResetInternetGateway` <a name="ResetInternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.resetInternetGateway"></a>

```csharp
private void ResetInternetGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput">InternetGatewayInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference InternetGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference">GoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference</a>

---

##### `InternetGatewayInput`<sup>Optional</sup> <a name="InternetGatewayInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGatewayInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayHubsInternetGateway InternetGatewayInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsInternetGateway">GoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayHubs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayHubs">GoogleBeyondcorpSecurityGatewayHubs</a>

---


### GoogleBeyondcorpSecurityGatewayLoggingOutputReference <a name="GoogleBeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayLogging">GoogleBeyondcorpSecurityGatewayLogging</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```csharp
private void ResetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```csharp
private void ResetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo">PutDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo">PutGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo">PutUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo">ResetDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo">ResetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo">ResetUserInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeviceInfo` <a name="PutDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo"></a>

```csharp
private void PutDeviceInfo(GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putDeviceInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---

##### `PutGroupInfo` <a name="PutGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo"></a>

```csharp
private void PutGroupInfo(GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---

##### `PutUserInfo` <a name="PutUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo"></a>

```csharp
private void PutUserInfo(GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.putUserInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---

##### `ResetDeviceInfo` <a name="ResetDeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetDeviceInfo"></a>

```csharp
private void ResetDeviceInfo()
```

##### `ResetGroupInfo` <a name="ResetGroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetGroupInfo"></a>

```csharp
private void ResetGroupInfo()
```

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetOutputType"></a>

```csharp
private void ResetOutputType()
```

##### `ResetUserInfo` <a name="ResetUserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resetUserInfo"></a>

```csharp
private void ResetUserInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">DeviceInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">GroupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">UserInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput">DeviceInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput">GroupInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput">UserInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceInfo`<sup>Required</sup> <a name="DeviceInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference DeviceInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference</a>

---

##### `GroupInfo`<sup>Required</sup> <a name="GroupInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference GroupInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference</a>

---

##### `UserInfo`<sup>Required</sup> <a name="UserInfo" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference UserInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference</a>

---

##### `DeviceInfoInput`<sup>Optional</sup> <a name="DeviceInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfoInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo DeviceInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---

##### `GroupInfoInput`<sup>Optional</sup> <a name="GroupInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfoInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo GroupInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `UserInfoInput`<sup>Optional</sup> <a name="UserInfoInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfoInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo UserInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```csharp
private void ResetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```csharp
public string OutputTypeInput { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders">PutContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders">ResetAllowedClientHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp">ResetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders">ResetContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity">ResetGatewayIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders">ResetMetadataHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContextualHeaders` <a name="PutContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders"></a>

```csharp
private void PutContextualHeaders(GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.putContextualHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---

##### `ResetAllowedClientHeaders` <a name="ResetAllowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetAllowedClientHeaders"></a>

```csharp
private void ResetAllowedClientHeaders()
```

##### `ResetClientIp` <a name="ResetClientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetClientIp"></a>

```csharp
private void ResetClientIp()
```

##### `ResetContextualHeaders` <a name="ResetContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetContextualHeaders"></a>

```csharp
private void ResetContextualHeaders()
```

##### `ResetGatewayIdentity` <a name="ResetGatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetGatewayIdentity"></a>

```csharp
private void ResetGatewayIdentity()
```

##### `ResetMetadataHeaders` <a name="ResetMetadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resetMetadataHeaders"></a>

```csharp
private void ResetMetadataHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">ContextualHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput">AllowedClientHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput">ClientIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput">ContextualHeadersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput">GatewayIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput">MetadataHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">AllowedClientHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">ClientIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">GatewayIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">MetadataHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextualHeaders`<sup>Required</sup> <a name="ContextualHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference ContextualHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference</a>

---

##### `AllowedClientHeadersInput`<sup>Optional</sup> <a name="AllowedClientHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeadersInput"></a>

```csharp
public string[] AllowedClientHeadersInput { get; }
```

- *Type:* string[]

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIpInput"></a>

```csharp
public bool|IResolvable ClientIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContextualHeadersInput`<sup>Optional</sup> <a name="ContextualHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeadersInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders ContextualHeadersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">GoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---

##### `GatewayIdentityInput`<sup>Optional</sup> <a name="GatewayIdentityInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentityInput"></a>

```csharp
public string GatewayIdentityInput { get; }
```

- *Type:* string

---

##### `MetadataHeadersInput`<sup>Optional</sup> <a name="MetadataHeadersInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AllowedClientHeaders`<sup>Required</sup> <a name="AllowedClientHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```csharp
public string[] AllowedClientHeaders { get; }
```

- *Type:* string[]

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```csharp
public bool|IResolvable ClientIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayIdentity`<sup>Required</sup> <a name="GatewayIdentity" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```csharp
public string GatewayIdentity { get; }
```

- *Type:* string

---

##### `MetadataHeaders`<sup>Required</sup> <a name="MetadataHeaders" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayProxyProtocolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayProxyProtocolConfig">GoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride">PutResourceOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride">ResetResourceOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceOverride` <a name="PutResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride"></a>

```csharp
private void PutResourceOverride(GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.putResourceOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---

##### `ResetResourceOverride` <a name="ResetResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resetResourceOverride"></a>

```csharp
private void ResetResourceOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">ResourceOverride</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput">ResourceOverrideInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceOverride`<sup>Required</sup> <a name="ResourceOverride" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference ResourceOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference</a>

---

##### `ResourceOverrideInput`<sup>Optional</sup> <a name="ResourceOverrideInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverrideInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride ResourceOverrideInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway">PutApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway">ResetApiGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiGateway` <a name="PutApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway"></a>

```csharp
private void PutApiGateway(GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---

##### `ResetApiGateway` <a name="ResetApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resetApiGateway"></a>

```csharp
private void ResetApiGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput">ApiGatewayInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGateway`<sup>Required</sup> <a name="ApiGateway" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference ApiGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference</a>

---

##### `ApiGatewayInput`<sup>Optional</sup> <a name="ApiGatewayInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGatewayInput"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway ApiGatewayInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">GoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```csharp
public GoogleBeyondcorpSecurityGatewayServiceDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayServiceDiscovery">GoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---


### GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference <a name="GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBeyondcorpSecurityGatewayTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBeyondcorpSecurityGateway.GoogleBeyondcorpSecurityGatewayTimeouts">GoogleBeyondcorpSecurityGatewayTimeouts</a>

---



